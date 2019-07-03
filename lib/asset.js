const CSSAsset = require('parcel-bundler/src/assets/CSSAsset');
const DtsCreator = require('typed-css-modules').default;
const cosmiconfig = require('cosmiconfig');
const dotProp = require('dot-prop');

const POSTCSS_MODULE_NAME = 'postcss';
const PROP_PATH_CAMEL_CASE = 'config.plugins.postcss-modules.camelCase';

module.exports = class TypedCssModules extends CSSAsset {
    constructor(name, options) {
        super(name, options);

        const explorer = cosmiconfig(POSTCSS_MODULE_NAME);
        const postCss = explorer.searchSync();

        this.creator = new DtsCreator({
            camelCase: dotProp.get(postCss, PROP_PATH_CAMEL_CASE, false) && 'dashes',
            EOL: '',
        });
    }

    async generate() {
        const result = await super.generate();

        if (this.cssModules) {
            try {
                const dtsContent = await this.creator.create(this.name);
                await dtsContent.writeFile();
            } catch (e) {
                console.error(`Could not create '${this.name}.d.ts' declaration file`, e);
            }
        }

        return result;
    }
};
