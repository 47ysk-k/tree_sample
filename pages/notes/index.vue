<template>
  <div id="editSection"></div>
</template>

<script>

export default {
  // middleware: 'userAuthenticated',
  mounted() {
    if (process.browser) {
      require('codemirror/lib/codemirror.css');
      require('tui-editor/dist/tui-editor.css');
      require('tui-editor/dist/tui-editor-contents.css');
      require('highlight.js/styles/github.css');

      const Editor = require('tui-editor');
      const editor = new Editor({
        el: document.querySelector('#editSection'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '600px'
      });
    }
  }
}
</script>

































