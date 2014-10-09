var userSchema = {
  name: String,
  links: {
    type:Number,
    default:0
  }
};

exports = mongoose.model('User',userSchema);
