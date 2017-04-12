import presetFlow from "babel-preset-flow";
import preset2015 from "babel-preset-es2015";
import transformReactJSX from "babel-plugin-transform-react-jsx";
import transformSyntaxJSX from "babel-plugin-syntax-jsx";
import transformReactDisplayName
  from "babel-plugin-transform-react-display-name";

export default {
  presets: [presetFlow, preset2015],
  plugins: [transformReactJSX, transformSyntaxJSX, transformReactDisplayName],
  env: {
    development: {
      plugins: []
    }
  }
};
