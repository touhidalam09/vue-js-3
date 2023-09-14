import { ref, watch } from "vue";

export function useStorage(key, val = null) {
    const storeVal = read();

    if (storeVal) {
        val = ref(storeVal);
    } else {
        val = ref(val)

        write()
    }


    watch(val, write, { deep: true });

    function read() {
        return JSON.parse(localStorage.getItem(key))
    }

    function write() {
        (val.value === null || val.value === "")
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(val.value))
    };

    return val;
}