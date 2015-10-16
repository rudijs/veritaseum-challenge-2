/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

if (typeof (NAMESPACE) == 'undefined' || NAMESPACE == null) {

    var NAMESPACE = {};

    // Creates an object that allocates a new or references an
    // existing very expensive resource associated with `id`
    var resource = function (id) {
        // Private data
        var _all_ids = new Array();
        var _closed = false;
        var _id = id;
        var _expensive_resource = null;

        // Public data
        var persona = {
        };

        // Public methods
        var getExpensiveResource = function () {
            return _expensive_resource;
        }

        persona.getExpensiveResource = getExpensiveResource;

        var getId = function () {
            return _id;
        }

        persona.getId = getId;

        // Add function to return _all_ids
        var getAllIds = function () {
            return _all_ids;
        }

        // Add public access to _all_ids
        persona.getAllIds = getAllIds;

        var close = function () {
            delete _all_ids[_id];
            this._closed = true;
        }

        persona.close = close;

        // Private methods
        function _lookupOrCreateExpensiveResourceById(id) {
            _expensive_resource = _all_ids[id];

            if (_expensive_resource == null) {
                // Just pretend for the sake of this example
                _expensive_resource = {
                    value: "I'm a very expensive resource associated with ID " + id
                };

                _all_ids[id] = _expensive_resource;
            }

            return _expensive_resource;
        }

        // Initialization
        _expensive_resource = _lookupOrCreateExpensiveResourceById(id);

        return persona;
    }

    NAMESPACE.resource = resource;

    // Debug

    var account = NAMESPACE.resource('abc');

    // If id is a number this will create an array of 11 items - the 1st 10 being null
    // var account = NAMESPACE.resource(10);

    console.log(account.getId());
    console.log(account.getAllIds());
    console.log(account.getExpensiveResource());
    account.close();

}
