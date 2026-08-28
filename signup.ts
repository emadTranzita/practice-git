async function signupHandler(username: string, email: string, password: string) {

	try {

		if (!username || !email || !password ) {
			return;

		}
	
		const res = await fetch('http://localhost:3000/api/auth/signup', {

			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({username, email, password})
		})

		if (res.status == 201){
			const data = await res.json();
			console.log(data);
			return data;		
		}

	}
	catch(error: any) {
		console.error(error.message);
	}



}
