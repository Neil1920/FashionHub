// Product data
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 2499,
        category: "men",
        subcategory: "casual-tshirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 7499,
        category: "men",
        subcategory: "casual-tshirt",
        sizes: ["S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Casual Sneakers",
        price: 6499,
        category: "men",
        subcategory: "sneakers",
        sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Summer Dress",
        price: 4999,
        category: "women",
        subcategory: "party-wear",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "women denim jacket",
        price: 5500,
        category: "women",
        subcategory: "top-wear",
        sizes: ["S", "M", "L"],
        image: "https://i.pinimg.com/736x/03/f8/af/03f8afee6599b10ee63bd3781934555c.jpg",
        image1:"https://i.pinimg.com/736x/5d/70/7f/5d707fd6735cf211bb7fcae37ea11e7c.jpg"
    },
    {
        id: 6,
        name: "Floral Blouse",
        price: 3499,
        category: "women",
        subcategory: "top-wear",
        sizes: ["XS", "S", "M", "L"],
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "High-Waist Jeans",
        price: 5999,
        category: "women",
        subcategory: "trousers",
        sizes: ["28", "30", "32", "34", "36"],
        image: "https://i.pinimg.com/736x/22/9e/e6/229ee6b5720085b2c1cd3525ef3a7ced.jpg"
    },
    {
        id: 8,
        name: "Designer Salwar Kameez",
        price: 8999,
        category: "women",
        subcategory: "party-wear",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Embroidered Anarkali Suit",
        price: 12999,
        category: "women",
        subcategory: "party-wear",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://th.bing.com/th/id/OIP.XHtRpVpzxGDB0oAaFYIn3QHaKL?w=800&h=1100&rs=1&pid=ImgDetMain"
    },
    {
        id: 10,
        name: "Cotton Churidar Suit",
        price: 6499,
        category: "women",
        subcategory: "party-wear",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Slim Fit Jeans",
        price: 4299,
        category: "men",
        subcategory: "casual-trousers",
        sizes: ["30", "32", "34", "36", "38"],
        image: "https://www.jockey.in/cdn/shop/products/UM45_INDGO_0103_S223_JKY_1_0fb1268a-8d40-4d36-b45f-7ca32121f615.webp?v=1700019161&width=560"
    },
    {
        id: 12,
        name: "Designer Kurta",
        price: 5999,
        category: "men",
        subcategory: "party-wear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://manyavar.scene7.com/is/image/manyavar/CPIW745V-322+Ram_2_04-10-2023-10-37:283x395?&dpr=on,2"
    },
    {
        id: 13,
        name: "Kurta Pajama Set",
        price: 7999,
        category: "men",
        subcategory: "party-wear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.pinimg.com/originals/ac/61/d9/ac61d937ed445f47c7b8ed6938b4d5ee.jpg"
    },
    {
        id: 14,
        name: "top-wear",
        price: 749,
        category: "women",
        subcategory: "top-wear",
        sizes: ["XS", "S", "M", "L"],
        image:"https://i.pinimg.com/736x/5d/70/7f/5d707fd6735cf211bb7fcae37ea11e7c.jpg"
    },
    {
        id: 15,
        name: "top-wear",
        price: 789,
        category: "women",
        subcategory: "top-wear",
        sizes: ["XS", "S", "M", "L"],
        image:"https://i.pinimg.com/736x/ea/43/44/ea43446ce906da5cbd30b2449fb68f5a.jpg"
    },
    {
        id:16,
        name:"Lungi",
        price:1500,
        category:"men",
        subcategory: "lungi",
        sizes: ["Free Size", "Small", "Large"],
        image:"https://i.pinimg.com/736x/cd/57/d3/cd57d3b4887c698cae5a85c21f3358f8.jpg"
    },
    // New Women's Party Wear Products
    {
        id: 17,
        name: "Evening Gown",
        price: 9999,
        category: "women",
        subcategory: "party-wear",
        image: "https://i.pinimg.com/736x/8b/5b/52/8b5b52bfa775a237abd5e64bd1c340f0.jpg"
    },
    {
        id: 18,
        name: "Designer Saree",
        price: 12599,
        category: "women",
        subcategory: "party-wear",
        image: "https://i.pinimg.com/736x/86/6a/61/866a615c22103a862f201795fa9d3cc7.jpg"
    },
    // Women's Athletic Wear
    {
        id: 19,
        name: "Sports Bra",
        price: 1899,
        category: "women",
        subcategory: "athletic",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://i.pinimg.com/736x/48/bc/7b/48bc7bc080fe4afbb24f092eb377a9ef.jpg"
    },
    {
        id: 20,
        name: "Yoga Pants",
        price: 2499,
        category: "women",
        subcategory: "athletic",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://i.pinimg.com/736x/11/9b/dd/119bdd728ce339bcec9866b228b450c3.jpg"
    },
    // Women's Shorts
    {
        id: 21,
        name: "Denim Shorts",
        price: 1999,
        category: "women",
        subcategory: "shorts",
        sizes: ["26", "28", "30", "32", "34"],
        image: "https://i.pinimg.com/736x/93/64/e1/9364e1629cd8e7dbbe066b2e46c585e3.jpg"
    },
    {
        id: 22,
        name: "Cotton Shorts",
        price: 1599,
        category: "women",
        subcategory: "shorts",
        sizes: ["26", "28", "30", "32", "34"],
        image: "https://i.pinimg.com/736x/65/4e/38/654e38d80ab21419a36d4d3663c3da49.jpg"
    },
    // Women's Skirts
    {
        id: 23,
        name: "Pleated Skirt",
        price: 2199,
        category: "women",
        subcategory: "skirts",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://i.pinimg.com/736x/04/55/6c/04556ccde9190bf0f6059a3c7fcb8d40.jpg"
    },
    {
        id: 24,
        name: "Midi Skirt",
        price: 2499,
        category: "women",
        subcategory: "skirts",
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://i.pinimg.com/736x/60/12/9d/60129d7b0e639de7e09bf19958d38e14.jpg"
    },
    // Men's Party Wear
    {
        id: 25,
        name: "Formal Suit",
        price: 13999,
        category: "men",
        subcategory: "party-wear",
        sizes: ["38", "40", "42", "44", "46"],
        image: "https://i.pinimg.com/736x/6b/ee/99/6bee99f3cf81dce4a7d11f19fd9db592.jpg"
    },
    {
        id: 26,
        name: "Tuxedo",
        price: 15999,
        category: "men",
        subcategory: "party-wear",
        sizes: ["38", "40", "42", "44", "46"],
        image: "https://i.pinimg.com/736x/59/ca/62/59ca62388158b350ecbc13045b35eb5c.jpg"
    },
    // Men's Casual Trousers
    {
        id: 27,
        name: "Chinos",
        price: 2499,
        category: "men",
        subcategory: "casual-trousers",
        sizes: ["30", "32", "34", "36", "38"],
        image: "https://i.pinimg.com/736x/d3/79/9e/d3799e28b5f221902f6ab7bbc8f28e0d.jpg"
    },
    {
        id: 28,
        name: "Cargo Pants",
        price: 2799,
        category: "men",
        subcategory: "casual-trousers",
        sizes: ["30", "32", "34", "36", "38"],
        image: "https://i.pinimg.com/736x/0f/9c/fe/0f9cfe3446e736d313e91cff7ab38a5f.jpg"
    },
    // Men's Formal Trousers
    {
        id: 29,
        name: "Formal Slacks",
        price: 3299,
        category: "men",
        subcategory: "formal-trousers",
        sizes: ["30", "32", "34", "36", "38"],
        image: "https://i.pinimg.com/736x/8e/20/a6/8e20a6f8e16abab5758dd736fbf5c303.jpg"
    },
    {
        id: 30,
        name: "Pleated Formal Pants",
        price: 3599,
        category: "men",
        subcategory: "formal-trousers",
        sizes: ["30", "32", "34", "36", "38"],
        image: "https://i.pinimg.com/736x/17/2b/bc/172bbc5299d6b98e0c6859b5d207048a.jpg"
    },
    // Men's Track Pants
    {
        id: 31,
        name: "Cotton Track Pants",
        price: 1899,
        category: "men",
        subcategory: "track-pants",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.pinimg.com/736x/0b/4f/70/0b4f70eb6825194770961eb9150bce3e.jpg"
    },
    {
        id: 32,
        name: "Sports Track Pants",
        price: 2199,
        category: "men",
        subcategory: "track-pants",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.pinimg.com/736x/1e/0e/c8/1e0ec8d80e0eaca95d8a3749f3993c80.jpg"
    },
    // Men's Sneakers
    {
        id: 33,
        name: "White Sneakers",
        price: 4999,
        category: "men",
        subcategory: "sneakers",
        sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://i.pinimg.com/736x/e5/90/b7/e590b7fe501d790721801397f9be05cf.jpg"
    },
    {
        id: 34,
        name: "Skate Sneakers",
        price: 5499,
        category: "men",
        subcategory: "sneakers",
        sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://i.pinimg.com/736x/af/d2/96/afd29603a54b8579d21091cb724aaf6b.jpg"
    },
    // Men's Running Shoes
    {
        id: 35,
        name: "Performance Runners",
        price: 7999,
        category: "men",
        subcategory: "running-shoes",
        sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://i.pinimg.com/736x/32/08/2f/32082f1e001169422e38f40881d6c6d4.jpg"
    },
    {
        id: 36,
        name: "Trail Running Shoes",
        price: 8499,
        category: "men",
        subcategory: "running-shoes",
        sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://i.pinimg.com/736x/64/8a/07/648a073d1eee7ccbff2cc91fe0124adc.jpg"
    },
    // Men's Flip Flops
    {
        id: 37,
        name: "Beach Flip Flops",
        price: 1299,
        category: "men",
        subcategory: "flip-flops",
        sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://i.pinimg.com/736x/0d/4e/c0/0d4ec0e1bfcf690e9fc3a87e1ae9e95d.jpg"
    },
    {
        id: 38,
        name: "Leather Flip Flops",
        price: 1499,
        category: "men",
        subcategory: "flip-flops",
        sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
        image: "https://i.pinimg.com/736x/e6/85/68/e68568464fe30ec5d71f8d6775b50d4a.jpg"
    },
    // Men's Formal T-shirts
    {
        id: 39,
        name: "Polo T-shirt",
        price: 1899,
        category: "men",
        subcategory: "formal-tshirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.pinimg.com/736x/6c/14/2c/6c142c6c8ef43e68dd59baa635dede8c.jpg"
    },
    {
        id: 40,
        name: "Collared T-shirt",
        price: 2099,
        category: "men",
        subcategory: "formal-tshirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.pinimg.com/736x/7f/95/6f/7f956f373a6f8f1f2dc73c61f89baa57.jpg"
    },
    // Men's Casual T-shirts
    {
        id: 41,
        name: "Graphic Print T-shirt",
        price: 1599,
        category: "men",
        subcategory: "casual-tshirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://m.media-amazon.com/images/I/61jwuuimf3L._SY741_.jpg"
    },
    {
        id: 42,
        name: "V-neck T-shirt",
        price: 1399,
        category: "men",
        subcategory: "casual-tshirt",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://i.pinimg.com/736x/17/87/61/1787612ad0337d783bd460d49af84daa.jpg"
    },
    // Additional Lungi products
    {
        id: 43,
        name: "Traditional Lungi",
        price: 1299,
        category: "men",
        subcategory: "lungi",
        sizes: ["Free Size", "Small", "Large"],
        image: "https://ramrajcotton.in/cdn/shop/files/241019_Ramraj_e-com11317_5a0ea4d5-f86c-4198-bedd-87eead3132f2.jpg?v=1738065339&width=1000"
    },
    {
        id: 44,
        name: "Cotton Lungi",
        price: 999,
        category: "men",
        subcategory: "lungi",
        sizes: ["Free Size", "Small", "Large"],
        image: "https://ramrajcotton.in/cdn/shop/files/Front_258e0f09-3134-4a22-abd6-f7ccd3d933cd.jpg?v=1719663549&width=1000"
    },
    {
        id: 45,
        name: "Fancy Lungi",
        price: 1699,
        category: "men",
        subcategory: "lungi",
        sizes: ["Free Size", "Small", "Large"],
        image: "https://ramrajcotton.in/cdn/shop/files/1_1.jpg?v=1741326370&width=1000"
    }
];

// Shopping cart
let cart = [];

// jQuery document ready
$(document).ready(function() {
    // Hide loading overlay when page is loaded
    $('#loading-overlay').fadeOut(300);
    
    // Initialize products display
    displayProducts();
    updateCartCount();
    
    // Setup navigation menu links to filter products
    $('a[href="#men"]').on('click', function(e) {
        e.preventDefault();
        filterProducts('men');
    });
    
    $('a[href="#women"]').on('click', function(e) {
        e.preventDefault();
        filterProducts('women');
    });
    
    $('a.active').on('click', function(e) {
        e.preventDefault();
        filterProducts('all');
    });
    
    // Filter buttons click event
    $('.filter-btn').on('click', function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const category = $(this).data('category');
        
        // Handle subcategory display
        if (category === 'men') {
            $('#women-subcategories').hide();
            $('#men-subcategories').fadeIn(300);
        } else if (category === 'women') {
            $('#men-subcategories').hide();
            $('#women-subcategories').fadeIn(300);
        } else {
            // Hide all subcategories for 'all' category
            $('.subcategories').hide();
        }
        
        displayProducts(category);
    });
    
    // Log subcategory data attributes for debugging
    $('.subcategory-btn').each(function() {
        console.log(`Subcategory button: ${$(this).text()}, data-subcategory: ${$(this).data('subcategory')}`);
    });
    
    // Subcategory buttons click event
    $('.subcategory-btn').on('click', function() {
        const parentCategory = $(this).closest('.subcategories').attr('id').split('-')[0]; // 'men' or 'women'
        const subcategory = $(this).data('subcategory');
        
        console.log(`Clicked subcategory button: ${subcategory} in parent category: ${parentCategory}`);
        
        // Toggle active state
        $(this).closest('.subcategory-list').find('.subcategory-btn').removeClass('active');
        $(this).addClass('active');
        
        // Display filtered products
        displayProductsBySubcategory(parentCategory, subcategory);
    });
    
    // Add to cart event (using event delegation)
    $('#products-grid').on('click', '.add-to-cart', function() {
        const productId = parseInt($(this).data('id'));
        const product = products.find(p => p.id === productId);
        
        // Check if product has sizes and if a size is selected
        let selectedSize = null;
        if (product.sizes && product.sizes.length > 0) {
            const sizeSelector = $(this).siblings('.size-selector');
            const selectedSizeOption = sizeSelector.find('.size-option.selected');
            
            if (selectedSizeOption.length === 0) {
                alert('Please select a size');
                return;
            }
            
            selectedSize = selectedSizeOption.data('size');
        }
        
        // Find if this product with same size exists in cart
        const existingItem = selectedSize ? 
            cart.find(item => item.id === productId && item.size === selectedSize) :
            cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const newItem = { id: productId, quantity: 1 };
            if (selectedSize) {
                newItem.size = selectedSize;
            }
            cart.push(newItem);
        }

        updateCartCount();
        updateCartModal();
        
        // Show addition confirmation
        const addConfirmation = $('<div>').addClass('add-confirmation').text('Added to cart!');
        $(this).after(addConfirmation);
        setTimeout(() => {
            addConfirmation.fadeOut(300, function() {
                $(this).remove();
            });
        }, 1500);
    });
    
    // Remove from cart event (using event delegation)
    $('#cart-items').on('click', '.remove-item', function() {
        const productId = parseInt($(this).data('id'));
        const size = $(this).data('size');
        
        if (size) {
            // Remove specific product with size
            cart = cart.filter(item => !(item.id === productId && item.size === size));
        } else {
            // Remove product without size consideration
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCartCount();
        updateCartModal();
    });
    
    // Cart modal
    $('a[href="#cart"]').on('click', function(e) {
        e.preventDefault();
        $('#cart-modal').fadeIn(300);
        // Ensure scroll position is at top when opening modal
        $(window).scrollTop(0);
        $('body').css('overflow', 'hidden');
    });
    
    $('.close').on('click', function() {
        $('#cart-modal').fadeOut(300);
        $('body').css('overflow', 'auto');
    });
    
    $(window).on('click', function(e) {
        if ($(e.target).is('#cart-modal')) {
            $('#cart-modal').fadeOut(300);
            $('body').css('overflow', 'auto');
        }
    });
    
    // Checkout
    $('#checkout-btn').on('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Hide cart modal and show billing form
        $('#cart-modal').fadeOut(300);
        showBillingForm();
    });
    
    // Mobile menu
    $('.hamburger').on('click', function() {
        $('.nav-links').toggleClass('active');
    });
    
    // Close menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length && $('.nav-links').hasClass('active')) {
            $('.nav-links').removeClass('active');
        }
    });
});

// Display products
function displayProducts(category = 'all') {
    // Show loading
    $('#loading-overlay').fadeIn(300);
    
    // Clear existing products
    $('#products-grid').empty();
    
    // Reset active subcategory buttons
    $('.subcategory-btn').removeClass('active');
    
    // Simulate loading delay for demo purposes
    setTimeout(function() {
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);

        $.each(filteredProducts, function(index, product) {
            const productCard = $('<div>').addClass('product-card');
            
            // Create size selector HTML if product has sizes
            let sizeSelectorHtml = '';
            if (product.sizes && product.sizes.length > 0) {
                sizeSelectorHtml = `
                    <div class="size-selector" data-product-id="${product.id}">
                        <p>Select Size:</p>
                        <div class="size-options">
                            ${product.sizes.map(size => 
                                `<div class="size-option" data-size="${size}">${size}</div>`
                            ).join('')}
                        </div>
                    </div>
                `;
            }
            
            // Generate random rating between 3.5 and 5
            const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else if (i === fullStars + 1 && hasHalfStar) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }
            
            productCard.html(`
                <div class="product-badge">${Math.random() > 0.7 ? '<span>SALE</span>' : ''}</div>
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-overlay">
                        <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-rating">
                        ${starsHtml}
                        <span>(${Math.floor(Math.random() * 50) + 10})</span>
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">₹${product.price.toFixed(2)}</p>
                    ${sizeSelectorHtml}
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `);
            $('#products-grid').append(productCard);
        });
        
        // Add event listeners for size options
        $('.size-option').on('click', function() {
            const productId = $(this).closest('.size-selector').data('product-id');
            // Remove selected class from all options in this product
            $(this).closest('.size-options').find('.size-option').removeClass('selected');
            // Add selected class to clicked option
            $(this).addClass('selected');
        });
        
        // Quick view functionality
        $('.quick-view-btn').on('click', function() {
            const productId = $(this).data('id');
            const product = products.find(p => p.id === productId);
            
            // Create and show quick view modal
            showQuickViewModal(product);
        });
        
        // Hide loading
        $('#loading-overlay').fadeOut(300);
    }, 500); // Simulated delay
}

// Function to handle filtering from navigation
function filterProducts(category) {
    // Update active filter button
    $('.filter-btn').each(function() {
        if ($(this).data('category') === category) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    
    // Update active navigation link
    $('.nav-links a').each(function() {
        if ((category === 'men' && $(this).attr('href') === '#men') || 
            (category === 'women' && $(this).attr('href') === '#women') ||
            (category === 'all' && $(this).attr('href') === '#')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    
    // Handle subcategory display
    if (category === 'men') {
        $('#women-subcategories').hide();
        $('#men-subcategories').fadeIn(300);
        // Reset active state on subcategories
        $('.subcategory-btn').removeClass('active');
    } else if (category === 'women') {
        $('#men-subcategories').hide();
        $('#women-subcategories').fadeIn(300);
        // Reset active state on subcategories
        $('.subcategory-btn').removeClass('active');
    } else {
        // Hide all subcategories for 'all' category
        $('.subcategories').hide();
    }
    
    // Display filtered products
    displayProducts(category);
    
    // Scroll to products section
    $('html, body').animate({
        scrollTop: $('#products').offset().top - 80
    }, 500);
    
    // Close mobile menu if open
    if ($(window).width() <= 768) {
        $('.nav-links').removeClass('active');
    }
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    $('#cart-count').text(count);
}

// Update cart modal
function updateCartModal() {
    $('#cart-items').empty();
    let total = 0;

    $.each(cart, function(index, item) {
        const product = products.find(p => p.id === item.id);
        total += product.price * item.quantity;

        const cartItem = $('<div>').addClass('cart-item');
        cartItem.html(`
            <div>
                <h4>${product.name}${item.size ? ` - Size ${item.size}` : ''}</h4>
                <p>₹${product.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div>
                <button class="remove-item" data-id="${product.id}" ${item.size ? `data-size="${item.size}"` : ''}>Remove</button>
            </div>
        `);
        $('#cart-items').append(cartItem);
    });

    $('#cart-total-amount').text(total.toFixed(2));
}

// Show billing form
function showBillingForm() {
    // Create billing form if it doesn't exist
    if ($('#billing-modal').length === 0) {
        const billingModal = $('<div>').attr('id', 'billing-modal').addClass('modal');
        const billingContent = $('<div>').addClass('modal-content');
        
        billingContent.html(`
            <span class="close">&times;</span>
            <h2>Billing Information</h2>
            <form id="billing-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" required>
                </div>
                <div class="form-group">
                    <label for="address">Shipping Address</label>
                    <textarea id="address" required></textarea>
                </div>
                <div class="form-group">
                    <label for="payment">Payment Method</label>
                    <select id="payment" required>
                        <option value="">Select Payment Method</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="cod">Cash on Delivery</option>
                    </select>
                </div>
                <div id="payment-details"></div>
                <div class="order-summary">
                    <h3>Order Summary</h3>
                    <div id="order-items"></div>
                    <div class="order-total">
                        <strong>Total: ₹<span id="order-total-amount">0</span></strong>
                    </div>
                </div>
                <button type="submit" id="place-order-btn">Place Order</button>
            </form>
        `);
        
        billingModal.append(billingContent);
        $('body').append(billingModal);
        
        // Close billing modal
        $('#billing-modal .close').on('click', function() {
            $('#billing-modal').fadeOut(300);
            $('body').css('overflow', 'auto');
        });
        
        // Payment method change
        $('#payment').on('change', function() {
            const paymentMethod = $(this).val();
            let paymentFields = '';
            
            if (paymentMethod === 'credit' || paymentMethod === 'debit') {
                paymentFields = `
                    <div class="form-group">
                        <label for="card-number">Card Number</label>
                        <input type="text" id="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group half">
                            <label for="expiry">Expiry (MM/YY)</label>
                            <input type="text" id="expiry" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group half">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" placeholder="XXX" required>
                        </div>
                    </div>
                `;
            } else if (paymentMethod === 'upi') {
                paymentFields = `
                    <div class="form-group">
                        <label for="upi-id">UPI ID</label>
                        <input type="text" id="upi-id" placeholder="yourname@upi" required>
                    </div>
                `;
            }
            
            $('#payment-details').html(paymentFields);
        });
        
        // Handle form submission
        $('#billing-form').on('submit', function(e) {
            e.preventDefault();
            processOrder();
        });
    }
    
    // Update order items and total
    updateOrderSummary();
    
    // Display billing modal
    $('#billing-modal').fadeIn(300);
    $('body').css('overflow', 'hidden');
}

// Update order summary in billing form
function updateOrderSummary() {
    $('#order-items').empty();
    let total = 0;
    
    $.each(cart, function(index, item) {
        const product = products.find(p => p.id === item.id);
        total += product.price * item.quantity;
        
        const orderItem = $('<div>').addClass('order-item');
        orderItem.html(`
            <div class="item-details">
                <span>${product.name} x ${item.quantity}</span>
                <span>₹${(product.price * item.quantity).toFixed(2)}</span>
            </div>
        `);
        
        $('#order-items').append(orderItem);
    });
    
    $('#order-total-amount').text(total.toFixed(2));
}

// Process order
function processOrder() {
    // Show loading
    $('#loading-overlay').fadeIn(300);
    
    // Simulate processing delay
    setTimeout(function() {
        // Get form data
        const orderData = {
            customer: {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                address: $('#address').val()
            },
            payment: {
                method: $('#payment').val()
            },
            items: cart.map(item => {
                const product = products.find(p => p.id === item.id);
                return {
                    name: product.name,
                    price: product.price,
                    quantity: item.quantity,
                    total: product.price * item.quantity
                };
            }),
            total: cart.reduce((total, item) => {
                const product = products.find(p => p.id === item.id);
                return total + (product.price * item.quantity);
            }, 0),
            date: new Date().toLocaleString(),
            orderId: 'ORD-' + Math.floor(Math.random() * 1000000)
        };
        
        // Hide loading
        $('#loading-overlay').fadeOut(300);
        
        // Show order confirmation
        showOrderConfirmation(orderData);
        
        // Clear cart
        cart = [];
        updateCartCount();
    }, 1500);
}

// Show order confirmation
function showOrderConfirmation(orderData) {
    // Hide billing modal
    $('#billing-modal').fadeOut(300);
    
    // Create confirmation modal if it doesn't exist
    if ($('#confirmation-modal').length === 0) {
        const confirmationModal = $('<div>').attr('id', 'confirmation-modal').addClass('modal');
        const confirmationContent = $('<div>').addClass('modal-content');
        
        confirmationContent.html(`
            <span class="close">&times;</span>
            <div class="confirmation-header">
                <h2>Order Confirmed</h2>
                <div class="success-checkmark">
                    <div class="check-icon">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                    </div>
                </div>
            </div>
            <div class="order-details">
                <p>Thank you for your purchase! Your order has been successfully placed.</p>
                <div class="order-info">
                    <p><strong>Order ID:</strong> <span id="confirm-order-id"></span></p>
                    <p><strong>Date:</strong> <span id="confirm-date"></span></p>
                    <p><strong>Shipping Address:</strong> <span id="confirm-address"></span></p>
                    <p><strong>Payment Method:</strong> <span id="confirm-payment"></span></p>
                </div>
                <div class="confirmation-summary">
                    <h3>Order Summary</h3>
                    <div id="confirm-items"></div>
                    <div class="confirmation-total">
                        <strong>Total: ₹<span id="confirm-total"></span></strong>
                    </div>
                </div>
                <div class="confirmation-actions">
                    <button id="download-invoice">Download Invoice</button>
                    <button id="continue-shopping">Continue Shopping</button>
                </div>
            </div>
        `);
        
        confirmationModal.append(confirmationContent);
        $('body').append(confirmationModal);
        
        // Close confirmation modal
        $('#confirmation-modal .close, #continue-shopping').on('click', function() {
            $('#confirmation-modal').fadeOut(300);
            $('body').css('overflow', 'auto');
        });
        
        // Download invoice
        $('#download-invoice').on('click', function() {
            generateInvoicePDF();
        });
    }
    
    // Update confirmation details
    $('#confirm-order-id').text(orderData.orderId);
    $('#confirm-date').text(orderData.date);
    $('#confirm-address').text(orderData.customer.address);
    
    let paymentMethodText = '';
    switch(orderData.payment.method) {
        case 'credit': paymentMethodText = 'Credit Card'; break;
        case 'debit': paymentMethodText = 'Debit Card'; break;
        case 'upi': paymentMethodText = 'UPI'; break;
        case 'cod': paymentMethodText = 'Cash on Delivery'; break;
        default: paymentMethodText = orderData.payment.method;
    }
    
    $('#confirm-payment').text(paymentMethodText);
    
    // Update confirmation items
    $('#confirm-items').empty();
    $.each(orderData.items, function(index, item) {
        const confirmItem = $('<div>').addClass('confirm-item');
        confirmItem.html(`
            <div class="item-details">
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${item.total.toFixed(2)}</span>
            </div>
        `);
        
        $('#confirm-items').append(confirmItem);
    });
    
    $('#confirm-total').text(orderData.total.toFixed(2));
    
    // Store order data for PDF generation
    window.currentOrder = orderData;
    
    // Show confirmation modal
    $('#confirmation-modal').fadeIn(300);
}

// Generate invoice PDF
function generateInvoicePDF() {
    if (!window.currentOrder) return;
    
    const orderData = window.currentOrder;
    
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add logo or header
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 153);
    doc.text('FASHION STORE', 105, 20, null, null, 'center');
    
    // Add invoice title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('INVOICE', 105, 30, null, null, 'center');
    
    // Add invoice details
    doc.setFontSize(10);
    doc.text(`Invoice #: ${orderData.orderId}`, 14, 45);
    doc.text(`Date: ${orderData.date}`, 14, 50);
    
    // Add customer details
    doc.setFontSize(12);
    doc.text('Bill To:', 14, 60);
    doc.setFontSize(10);
    doc.text(`${orderData.customer.name}`, 14, 65);
    doc.text(`${orderData.customer.email}`, 14, 70);
    doc.text(`${orderData.customer.phone}`, 14, 75);
    doc.text(`${orderData.customer.address}`, 14, 80);
    
    // Add payment method
    let paymentMethodText = '';
    switch(orderData.payment.method) {
        case 'credit': paymentMethodText = 'Credit Card'; break;
        case 'debit': paymentMethodText = 'Debit Card'; break;
        case 'upi': paymentMethodText = 'UPI'; break;
        case 'cod': paymentMethodText = 'Cash on Delivery'; break;
        default: paymentMethodText = orderData.payment.method;
    }
    doc.text(`Payment Method: ${paymentMethodText}`, 140, 65);
    
    // Add table header
    doc.setFillColor(230, 230, 230);
    doc.rect(14, 90, 182, 8, 'F');
    doc.setTextColor(0, 0, 0);
    doc.text('Item', 16, 95);
    doc.text('Qty', 110, 95);
    doc.text('Price', 130, 95);
    doc.text('Total', 180, 95, null, null, 'right');
    
    // Add table rows
    let y = 105;
    orderData.items.forEach((item, index) => {
        doc.text(item.name, 16, y);
        doc.text(item.quantity.toString(), 110, y);
        doc.text(`₹${item.price.toFixed(2)}`, 130, y);
        doc.text(`₹${item.total.toFixed(2)}`, 180, y, null, null, 'right');
        y += 8;
        
        // If page is full, add new page
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    });
    
    // Add total
    const totalY = y + 10;
    doc.setDrawColor(0, 0, 0);
    doc.line(130, totalY - 5, 196, totalY - 5);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', 150, totalY);
    doc.text(`₹${orderData.total.toFixed(2)}`, 180, totalY, null, null, 'right');
    
    // Add footer
    const footerY = totalY + 20;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for shopping with us!', 105, footerY, null, null, 'center');
    doc.text('For any queries, please contact us at: info@fashionstore.com', 105, footerY + 5, null, null, 'center');
    
    // Save the PDF
    doc.save(`Invoice_${orderData.orderId}.pdf`);
}

// Function to display products by subcategory
function displayProductsBySubcategory(category, subcategory) {
    // Show loading
    $('#loading-overlay').fadeIn(300);
    
    // Clear existing products
    $('#products-grid').empty();
    
    console.log(`Filtering for category: ${category}, subcategory: ${subcategory}`);
    
    // Simulate loading delay for demo purposes
    setTimeout(function() {
        // Filter products by category and subcategory (case-insensitive comparison)
        const filteredProducts = products.filter(product => 
            product.category.toLowerCase() === category.toLowerCase() && 
            product.subcategory.toLowerCase() === subcategory.toLowerCase()
        );

        console.log(`Found ${filteredProducts.length} products matching the filter`);
        
        if (filteredProducts.length === 0) {
            $('#products-grid').html('<div class="no-products"><p>No products found in this category.</p></div>');
        } else {
            $.each(filteredProducts, function(index, product) {
                const productCard = $('<div>').addClass('product-card');
                
                // Create size selector HTML if product has sizes
                let sizeSelectorHtml = '';
                if (product.sizes && product.sizes.length > 0) {
                    sizeSelectorHtml = `
                        <div class="size-selector" data-product-id="${product.id}">
                            <p>Select Size:</p>
                            <div class="size-options">
                                ${product.sizes.map(size => 
                                    `<div class="size-option" data-size="${size}">${size}</div>`
                                ).join('')}
                            </div>
                        </div>
                    `;
                }
                
                // Generate random rating between 3.5 and 5
                const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= fullStars) {
                        starsHtml += '<i class="fas fa-star"></i>';
                    } else if (i === fullStars + 1 && hasHalfStar) {
                        starsHtml += '<i class="fas fa-star-half-alt"></i>';
                    } else {
                        starsHtml += '<i class="far fa-star"></i>';
                    }
                }
                
                productCard.html(`
                    <div class="product-badge">${Math.random() > 0.7 ? '<span>SALE</span>' : ''}</div>
                    <div class="product-image-container">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-overlay">
                            <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-rating">
                            ${starsHtml}
                            <span>(${Math.floor(Math.random() * 50) + 10})</span>
                        </div>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">₹${product.price.toFixed(2)}</p>
                        ${sizeSelectorHtml}
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `);
                $('#products-grid').append(productCard);
            });
            
            // Add event listeners for size options
            $('.size-option').on('click', function() {
                const productId = $(this).closest('.size-selector').data('product-id');
                // Remove selected class from all options in this product
                $(this).closest('.size-options').find('.size-option').removeClass('selected');
                // Add selected class to clicked option
                $(this).addClass('selected');
            });
            
            // Quick view functionality
            $('.quick-view-btn').on('click', function() {
                const productId = $(this).data('id');
                const product = products.find(p => p.id === productId);
                
                // Create and show quick view modal
                showQuickViewModal(product);
            });
        }
        
        // Hide loading
        $('#loading-overlay').fadeOut(300);
    }, 800); // Slightly longer delay to ensure everything loads
}

// Function to show quick view modal
function showQuickViewModal(product) {
    // Create quick view modal if it doesn't exist
    if ($('#quick-view-modal').length === 0) {
        const quickViewModal = $('<div>').attr('id', 'quick-view-modal').addClass('modal');
        const quickViewContent = $('<div>').addClass('modal-content quick-view-content');
        
        quickViewContent.html(`
            <span class="close">&times;</span>
            <div class="quick-view-container">
                <div class="quick-view-image">
                    <img src="" alt="" id="quick-view-img">
                </div>
                <div class="quick-view-details">
                    <h2 id="quick-view-title"></h2>
                    <div id="quick-view-rating" class="product-rating"></div>
                    <p class="product-price" id="quick-view-price"></p>
                    <div class="product-description" id="quick-view-description"></div>
                    <div id="quick-view-sizes" class="size-selector"></div>
                    <button id="quick-view-add-to-cart" class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `);
        
        quickViewModal.append(quickViewContent);
        $('body').append(quickViewModal);
        
        // Close quick view modal
        $('#quick-view-modal .close').on('click', function() {
            $('#quick-view-modal').fadeOut(300);
            $('body').css('overflow', 'auto');
        });
        
        // Close when clicking outside
        $('#quick-view-modal').on('click', function(e) {
            if ($(e.target).is('#quick-view-modal')) {
                $('#quick-view-modal').fadeOut(300);
                $('body').css('overflow', 'auto');
            }
        });
        
        // Add to cart from quick view
        $('#quick-view-add-to-cart').on('click', function() {
            const productId = parseInt($(this).data('id'));
            const product = products.find(p => p.id === productId);
            
            // Check if product has sizes and if a size is selected
            let selectedSize = null;
            if (product.sizes && product.sizes.length > 0) {
                const selectedSizeOption = $('#quick-view-sizes').find('.size-option.selected');
                
                if (selectedSizeOption.length === 0) {
                    alert('Please select a size');
                    return;
                }
                
                selectedSize = selectedSizeOption.data('size');
            }
            
            // Find if this product with same size exists in cart
            const existingItem = selectedSize ? 
                cart.find(item => item.id === productId && item.size === selectedSize) :
                cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                const newItem = { id: productId, quantity: 1 };
                if (selectedSize) {
                    newItem.size = selectedSize;
                }
                cart.push(newItem);
            }

            updateCartCount();
            updateCartModal();
            
            // Close modal after adding to cart
            $('#quick-view-modal').fadeOut(300);
            $('body').css('overflow', 'auto');
            
            // Show confirmation message
            const confirmationMsg = $('<div>').addClass('cart-notification').text('Added to cart!');
            $('body').append(confirmationMsg);
            
            setTimeout(() => {
                confirmationMsg.fadeOut(300, function() {
                    $(this).remove();
                });
            }, 2000);
        });
    }
    
    // Generate random rating between 3.5 and 5
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    // Generate random product description
    const descriptions = [
        "Made from premium quality materials for ultimate comfort and durability.",
        "Stylish design that pairs well with any outfit for a fashionable look.",
        "Perfect for both casual and formal occasions with its versatile design.",
        "Handcrafted with attention to detail for a unique fashion statement.",
        "Latest trend that combines style with comfort for everyday wear."
    ];
    
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    // Update quick view modal with product details
    $('#quick-view-img').attr('src', product.image).attr('alt', product.name);
    $('#quick-view-title').text(product.name);
    $('#quick-view-rating').html(`${starsHtml} <span>(${Math.floor(Math.random() * 50) + 10})</span>`);
    $('#quick-view-price').text(`₹${product.price.toFixed(2)}`);
    $('#quick-view-description').html(`<p>${randomDescription}</p>`);
    $('#quick-view-add-to-cart').data('id', product.id);
    
    // Add size options if available
    if (product.sizes && product.sizes.length > 0) {
        let sizeSelectorHtml = `
            <p>Select Size:</p>
            <div class="size-options">
                ${product.sizes.map(size => 
                    `<div class="size-option" data-size="${size}">${size}</div>`
                ).join('')}
            </div>
        `;
        $('#quick-view-sizes').html(sizeSelectorHtml).show();
        
        // Add event listeners for size options
        $('#quick-view-sizes .size-option').on('click', function() {
            // Remove selected class from all options
            $('#quick-view-sizes .size-option').removeClass('selected');
            // Add selected class to clicked option
            $(this).addClass('selected');
        });
    } else {
        $('#quick-view-sizes').hide();
    }
    
    // Show quick view modal
    $('#quick-view-modal').fadeIn(300);
    $('body').css('overflow', 'hidden');
} 