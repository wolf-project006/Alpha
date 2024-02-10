const { useState } = require('react');

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('User created successfully');
        // Redirect logic here
      } else {
        console.error('Error creating user:', data);
      }
    } catch (error) {
      console.error('Error creating user', error.message);
    }

    console.log(email, password);
  };

  return (
    <>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Signup</h3>

        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Sign up</button>
      </form>
    </>
  );
};

export default Signup;
