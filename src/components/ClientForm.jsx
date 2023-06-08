function ClientForm() {
  return (
    <div class="py-12">
      <h2 className="text-center text-2xl mb-4 font-display text-black">
        Client's Information
      </h2>
      <div class="mt-8 max-w-md my-0 mx-auto">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Goverment ID</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="john@example.com"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Phone</span>
            <input
              type="tel"
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              placeholder="555-555-5555"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea
              class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              rows="3"
            ></textarea>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="
                      rounded
                      bg-gray-200
                      border-transparent
                      focus:border-transparent focus:bg-gray-200
                      text-gray-700
                      focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                    "
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
