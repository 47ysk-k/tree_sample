<template>
  <div id="editSection"></div>
</template>

<script>

export default {
  middleware: 'authenticated',
  mounted() {
    if (process.browser) {
      require('codemirror/lib/codemirror.css');
      require('tui-editor/dist/tui-editor.css');
      require('tui-editor/dist/tui-editor-contents.css');
      require('highlight.js/styles/github.css');

      var Editor = require('tui-editor');
      var editor = new Editor({
        el: document.querySelector('#editSection'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '600px'
      });
    }
  }
}
</script>

































