# node-red-contrib-objectid
Node-Red Node to create an ObjectID for queries in mongodb

<img src="https://github.com/Chris1234567899/node-red-contrib-objectid/blob/master/screenshots/screenshot1.PNG" />

This small node-red node is used to create an ObjectID for mongodb.

Use it to query mongodb with an ObjectID. You can input a 24 char hexstring and create an ObjectID from it.

The input is processed with the first match in the following order:

0. If `msg._id` exists, convert it to `ObjectID`.
0. If `msg.payload._id` exists, converted it to `ObjectID`.
0. Otherwise generates a new `ObjectID` in `msg._id`.

## License:
__MIT:__
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
