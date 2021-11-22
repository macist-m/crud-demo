const rules = {
	required: [(v) => !!v || "Gerekli Alan!"],
	onlyYear: [(v) => !!v || "Gerekli Alan!", (v) => v <= 9999 || "Bu alan 9999 küçük olmalıdır!"],
	url: [
		(v) => !!v || "Gerekli Alan!",
		// eslint-disable-next-line no-useless-escape
		(v) => /https?:[0-9]*\/\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(v) || "Geçersiz URL adresi!"
	]
};

export default rules;
