'use babel';

const CompletionProvider = require('./completion-provider');

class AutocompleteModulesPlugin {
  constructor() {
    this.config = {
      title: 'Offset Folder for locals',
      description: 'Offset Folder for locals',
      type: 'string',
      'default': '',
      order: 1
    }; 
  }
  
  activate() {
    this.completionProvider = new CompletionProvider();
  }

  deactivate() {
    delete this.completionProvider;
    this.completionProvider = null;
  }

  getCompletionProvider() {
    return this.completionProvider;
  }
}

module.exports = new AutocompleteModulesPlugin();
