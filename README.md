# node-red-contrib-objectid
Node-Red Node to create an ObjectID for queries in mongodb

<img src="https://github.com/Chris1234567899/node-red-contrib-objectid/blob/master/screenshots/screenshot1.PNG" />

<p>This small node-red node is used to create an ObjectID for mongodb.</p></br>
	
<p>Use it to query mongodb with an ObjectID. You can input a 24 char hexstring and create an ObjectID from it. 
	The input must be passed in a msg._id element. For example:  </p>
	

    msg._id = "572dbc06f307c8682045c55c"
    
<p>If msg._id is null, a random id is created.</p>
	
	
<h2>License: </h2>
<b>MIT:</b>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
