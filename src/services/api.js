import Vue from "vue";
const crudUrl = Vue.$cookies.isKey("crud_url");
const BASE_URL = crudUrl ? Vue.$cookies.get("crud_url") : "";

const get = async (url) => {
	try {
		const response = await fetch(`${BASE_URL}/${url}`);
		const data = await response.json();

		return data;
	} catch (error) {
		alert("CRUDCRUD api bağlantısı bulunamadı!");
	}
};

const post = async (url, data) => {
	try {
		const postData = await fetch(`${BASE_URL}/${url}`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ body: data })
		});
		const response = await postData.json();

		return response;
	} catch (error) {
		alert(error);
	}
};

const update = async (url, item_id, data) => {
	try {
		await fetch(`${BASE_URL}/${url}/${item_id}`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ body: data })
		});
	} catch (error) {
		alert(error);
	}
};

const remove = async (url, item_id) => {
	try {
		await fetch(`${BASE_URL}/${url}/${item_id}`, {
			method: "DELETE"
		});
	} catch (error) {
		alert(error);
	}
};

export { get, post, update, remove };
