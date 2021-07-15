<form onSubmit={handleSubmit}>	
    <h3>Login To Your Account:</h3>	
    <div className="form-group">	
    <label htmlFor={"email-input"}>email:</label>
        <input id="email-input" type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />	
    </div>	
    <div className="form-group">	
    <label htmlFor={"password-input"}>password:</label>
        <input id="password-input" type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} value={password} />	
    </div>	
    <button type="submit" value="login" className="btn btn-primary btn-block">Submit</button>		
</form>	
);	
}	
