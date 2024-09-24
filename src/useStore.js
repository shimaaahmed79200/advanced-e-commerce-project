import create from 'zustand';

export const useStore = create((set) => ({
  // Categories state and actions
  categories: [],
  loading: false,
  error: null,

  // Pages state and actions
  pages: {
    Categories: {
      title: 'Categories Page Title',
      backgroundImage: '/images/categories-bg.png',
    },
    ShopPage: {
      title: 'ShopPage Page Title',
      backgroundImage: '/images/shop-bg.png',
    },
    contact: {
      title: 'Contact Page Title',
      backgroundImage: '/images/contact-bg.png',
    },
  },
  currentPage: 'home',
  setPage: (page) => set({ currentPage: page }),
  getPageInfo: (page) => (state) => state.pages[page],

  // Fetch categories function
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      set({ categories: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Selected product and category state
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  // fetchProductById: async () => {
  //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //   const product = await response.json();
  //   set({ selectedProduct: product });
  // },

  selectedCategory: null, // To store the selected category
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  // Products state and actions
  products: [],
  setProducts: (products) => set({ products }),
  currentProductPage: 1,
  totalPages: 3,
  setCurrentProductPage: (page) => set({ currentProductPage: page }),

  // Contact form state and actions
  name: '',
  email: '',
  subject: '',
  message: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setSubject: (subject) => set({ subject }),
  setMessage: (message) => set({ message }),
  resetForm: () => set({
    name: '',
    email: '',
    subject: '',
    message: ''
  }),
  submitForm: async () => {
    const { name, email, subject, message } = useStore.getState();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      console.log('Form submitted successfully');
      useStore.getState().resetForm();

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  },

  // Cart state and actions
    cart: [],
    quantity: {},
    isCartVisible: false,
    setIsCartVisible: (isVisible) => set({ isCartVisible: isVisible }),
  
    // Add to cart with quantity
    addToCart: (product, id) => 
      set((state) => {
        const existingProduct = state.cart.find((item) => item.id === product.id);
        const productQuantity = state.quantity[id] || 1; // Get the quantity from the state
  
        if (existingProduct) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + productQuantity }
                : item
            ),
          };
        } else {
          return {
            cart: [...state.cart, { ...product, quantity: productQuantity }],
          };
        }
      }),
  
    // Remove from cart
    removeFromCart: (id) => set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  
    // Action to increment quantity
    incrementQuantity: (id) =>
      set((state) => ({
        quantity: {
          ...state.quantity,
          [id]: (state.quantity[id] || 1) + 1,
        },
      })),
  
    // Action to decrement quantity
    decrementQuantity: (id) =>
      set((state) => ({
        quantity: {
          ...state.quantity,
          [id]: Math.max((state.quantity[id] || 1) - 1, 1),
        },
      })),
  
    clearCart: () => set({ cart: [] }),
  
    // Update item quantity in cart
    updateQuantity: (itemId, quantity) =>
      set((state) => ({
        cart: state.cart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: quantity > 0 ? quantity : 1 }
            : cartItem
        ),
      })),
  }));