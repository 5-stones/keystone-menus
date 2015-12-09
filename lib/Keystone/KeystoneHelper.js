'use strict';

class KeystoneHelper {

  setKeystone(keystone){
    var self = this;
    self.keystone = keystone;

    return self;
  }

  getKeystone(){
    var self = this;
    return self.keystone;
  }

  setCurrentRequest(req){
    var self = this;
    self.request = req;
    return self;
  }

  getCurrentRequest(){
    var self = this;
    return self.request;
  }

}


module.exports = new KeystoneHelper();
