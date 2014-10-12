function comparator(type){
	return (typeof type === 'function' ? typeAssert : schema)(type);
}

function typeAssert(type){
	return function(item){
		return type(item) === item;
	};
}

function schema(map){
	return function(target){
		return Object.keys(map).every(function(key){
			var type = map[key];

			if(Array.isArray(type)){
				return Array.isArray(target[key]) && target[key].every(comparator(type[0]));
			}

			return target.hasOwnProperty(key) && comparator(type)(target[key]);
		});
	};
}

module.exports = schema;
