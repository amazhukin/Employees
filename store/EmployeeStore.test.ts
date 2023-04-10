import { setActivePinia, createPinia } from "pinia";
import { useEmployeeStore } from "./employeeStore";

beforeAll(() => {
  setActivePinia(createPinia());
})

describe("useEmployeeStore", () => {
  let store: ReturnType<typeof useEmployeeStore>;

  beforeEach(() => {
    store = useEmployeeStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("create a store", () => {
    const store = useEmployeeStore();
    expect(store).toBeDefined();
  });

  test("initializes with empty items", () => {
    expect(store.items).toStrictEqual([]);
  });
})