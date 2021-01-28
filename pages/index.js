import Head from 'next/head';

module.exports = () => (
	<>
		<Head>
			<title>HTTP status as a service</title>
			<style>
				{`
					body {
						font-family: monospace;
						font-size: larger;
					}
					div {
						width: 360px;
						margin: auto;
					}
					a {
						color: black;
						text-decoration: none;
					}
					.code {
						color: #d6156d;
					}
				`}
			</style>
		</Head>
		<h2>
			HTTP status <span class="code">as a service</span>
		</h2>
		<h3>
			<span class="code">1××</span> Informational
		</h3>
		<div>
			<a href="/api/100">
				<span class="code">100</span> Continue
			</a>
		</div>
		<div>
			<a href="/api/101">
				<span class="code">101</span> Switching Protocols
			</a>
		</div>
		<div>
			<a href="/api/102">
				<span class="code">102</span> Processing
			</a>
		</div>
		<h3>
			<span class="code">2××</span> Success
		</h3>
		<div>
			<a href="/api/200">
				<span class="code">200</span> OK
			</a>
		</div>
		<div>
			<a href="/api/201">
				<span class="code">201</span> Created
			</a>
		</div>
		<div>
			<a href="/api/202">
				<span class="code">202</span> Accepted
			</a>
		</div>
		<div>
			<a href="/api/203">
				<span class="code">203</span> Non-authoritative Information
			</a>
		</div>
		<div>
			<a href="/api/204">
				<span class="code">204</span> No Content
			</a>
		</div>
		<div>
			<a href="/api/205">
				<span class="code">205</span> Reset Content
			</a>
		</div>
		<div>
			<a href="/api/206">
				<span class="code">206</span> Partial Content
			</a>
		</div>
		<div>
			<a href="/api/207">
				<span class="code">207</span> Multi-Status
			</a>
		</div>
		<div>
			<a href="/api/208">
				<span class="code">208</span> Already Reported
			</a>
		</div>
		<div>
			<a href="/api/226">
				<span class="code">226</span> IM Used
			</a>
		</div>
		<h3>
			<span class="code">3××</span> Redirection
		</h3>
		<div>
			<a href="/api/300">
				<span class="code">300</span> Multiple Choices
			</a>
		</div>
		<div>
			<a href="/api/301">
				<span class="code">301</span> Moved Permanently
			</a>
		</div>
		<div>
			<a href="/api/302">
				<span class="code">302</span> Found
			</a>
		</div>
		<div>
			<a href="/api/303">
				<span class="code">303</span> See Other
			</a>
		</div>
		<div>
			<a href="/api/304">
				<span class="code">304</span> Not Modified
			</a>
		</div>
		<div>
			<a href="/api/305">
				<span class="code">305</span> Use Proxy
			</a>
		</div>
		<div>
			<a href="/api/307">
				<span class="code">307</span> Temporary Redirect
			</a>
		</div>
		<div>
			<a href="/api/308">
				<span class="code">308</span> Permanent Redirect
			</a>
		</div>
		<h3>
			<span class="code">4××</span> Client Error
		</h3>
		<div>
			<a href="/api/400">
				<span class="code">400</span> Bad Request
			</a>
		</div>
		<div>
			<a href="/api/401">
				<span class="code">401</span> Unauthorized
			</a>
		</div>
		<div>
			<a href="/api/402">
				<span class="code">402</span> Payment Required
			</a>
		</div>
		<div>
			<a href="/api/403">
				<span class="code">403</span> Forbidden
			</a>
		</div>
		<div>
			<a href="/api/404">
				<span class="code">404</span> Not Found
			</a>
		</div>
		<div>
			<a href="/api/405">
				<span class="code">405</span> Method Not Allowed
			</a>
		</div>
		<div>
			<a href="/api/406">
				<span class="code">406</span> Not Acceptable
			</a>
		</div>
		<div>
			<a href="/api/407">
				<span class="code">407</span> Proxy Authentication Required
			</a>
		</div>
		<div>
			<a href="/api/408">
				<span class="code">408</span> Request Timeout
			</a>
		</div>
		<div>
			<a href="/api/409">
				<span class="code">409</span> Conflict
			</a>
		</div>
		<div>
			<a href="/api/410">
				<span class="code">410</span> Gone
			</a>
		</div>
		<div>
			<a href="/api/411">
				<span class="code">411</span> Length Required
			</a>
		</div>
		<div>
			<a href="/api/412">
				<span class="code">412</span> Precondition Failed
			</a>
		</div>
		<div>
			<a href="/api/413">
				<span class="code">413</span> Payload Too Large
			</a>
		</div>
		<div>
			<a href="/api/414">
				<span class="code">414</span> Request-URI Too Long
			</a>
		</div>
		<div>
			<a href="/api/415">
				<span class="code">415</span> Unsupported Media Type
			</a>
		</div>
		<div>
			<a href="/api/416">
				<span class="code">416</span> Requested Range Not Satisfiable
			</a>
		</div>
		<div>
			<a href="/api/417">
				<span class="code">417</span> Expectation Failed
			</a>
		</div>
		<div>
			<a href="/api/418">
				<span class="code">418</span> I'm a teapot
			</a>
		</div>
		<div>
			<a href="/api/421">
				<span class="code">421</span> Misdirected Request
			</a>
		</div>
		<div>
			<a href="/api/422">
				<span class="code">422</span> Unprocessable Entity
			</a>
		</div>
		<div>
			<a href="/api/423">
				<span class="code">423</span> Locked
			</a>
		</div>
		<div>
			<a href="/api/424">
				<span class="code">424</span> Failed Dependency
			</a>
		</div>
		<div>
			<a href="/api/426">
				<span class="code">426</span> Upgrade Required
			</a>
		</div>
		<div>
			<a href="/api/428">
				<span class="code">428</span> Precondition Required
			</a>
		</div>
		<div>
			<a href="/api/429">
				<span class="code">429</span> Too Many Requests
			</a>
		</div>
		<div>
			<a href="/api/431">
				<span class="code">431</span> Request Header Fields Too Large
			</a>
		</div>
		<div>
			<a href="/api/444">
				<span class="code">444</span> Connection Closed Without Response
			</a>
		</div>
		<div>
			<a href="/api/451">
				<span class="code">451</span> Unavailable For Legal Reasons
			</a>
		</div>
		<div>
			<a href="/api/499">
				<span class="code">499</span> Client Closed Request
			</a>
		</div>
		<h3>
			<span class="code">5××</span> Server Error
		</h3>
		<div>
			<a href="/api/500">
				<span class="code">500</span> Internal Server Error
			</a>
		</div>
		<div>
			<a href="/api/501">
				<span class="code">501</span> Not Implemented
			</a>
		</div>
		<div>
			<a href="/api/502">
				<span class="code">502</span> Bad Gateway
			</a>
		</div>
		<div>
			<a href="/api/503">
				<span class="code">503</span> Service Unavailable
			</a>
		</div>
		<div>
			<a href="/api/504">
				<span class="code">504</span> Gateway Timeout
			</a>
		</div>
		<div>
			<a href="/api/505">
				<span class="code">505</span> HTTP Version Not Supported
			</a>
		</div>
		<div>
			<a href="/api/506">
				<span class="code">506</span> Variant Also Negotiates
			</a>
		</div>
		<div>
			<a href="/api/507">
				<span class="code">507</span> Insufficient Storage
			</a>
		</div>
		<div>
			<a href="/api/508">
				<span class="code">508</span> Loop Detected
			</a>
		</div>
		<div>
			<a href="/api/510">
				<span class="code">510</span> Not Extended
			</a>
		</div>
		<div>
			<a href="/api/511">
				<span class="code">511</span> Network Authentication Required
			</a>
		</div>
		<div>
			<a href="/api/599">
				<span class="code">599</span> Network Connect Timeout Error
			</a>
		</div>
		<h2>
			Served with <span class="code">❤︎</span> by <a href="https://hubc.app/">hubc.app</a>
		</h2>
	</>
);
