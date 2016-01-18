import {Schema, model} from 'mongoose';

var postSchema = new Schema{
	id: {type: Number}
}

export model('Post', postSchema);