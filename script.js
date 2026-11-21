const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzdlayv";
const DELIVERY_DURATION_SECONDS = 60;

const DRINK_BEST_SELLERS = {
    warm: {
        catKey: "drinks",
        index: 8,
        title: "Velvet Latte Art Cappuccino",
        priceText: "65 EGP",
        img: "img/Drinks/9.jfif",
        desc: "Top warm drink pick! Double-shot espresso with silky micro-foam for cozy mornings and evenings."
    },
    "fresh-cold": {
        catKey: "drinks",
        index: 2,
        title: "Tropical Passion Fruit & Mint Fizz",
        priceText: "80 EGP",
        img: "img/Drinks/3.jfif",
        desc: "Top fresh & cold pick! Chilled passion fruit fizz layered with sparkling notes and fresh mint."
    },
    water: {
        catKey: "drinks",
        index: 18,
        title: "Still Mineral Water",
        priceText: "20 EGP",
        img: "img/Drinks/19.jfif",
        desc: "Top water pick! Crisp purified bottled mineral water served chilled with every meal."
    }
};

const categoryData = {
    meals: {
        title: "Meals Menu & Prices",
        label: "Meals",
        items: [
            { name: "Crunchy Rainbow Carrot & Beet Salad", price: "65 EGP", img: "img/meals/1.jfif", subLabel: "Salad", desc: "Crisp julienned carrots, beets, and fresh herbs tossed in a light citrus sesame dressing." },
            { name: "Cheesy Herb Garlic Bread", price: "75 EGP", img: "img/meals/2.jfif", subLabel: "Starter", desc: "Toasted artisan bread slices topped with melted mozzarella, garlic butter, and parsley." },
            { name: "Walnut, Cranberry & Goat Cheese Flatbread", price: "145 EGP", img: "img/meals/3.jfif", subLabel: "Flatbread", desc: "Warm stone-baked flatbread layered with creamy goat cheese, toasted walnuts, cranberries, and thyme." },
            { name: "Grilled Halloumi & Herb Skewers", price: "135 EGP", img: "img/meals/4.jfif", subLabel: "Grill", desc: "Char-grilled golden halloumi skewers brushed with olive oil, oregano, and a sweet chili dip." },
            { name: "Spinach, Sun-Dried Tomato & Cheese Melt", price: "125 EGP", img: "img/meals/5.jfif", subLabel: "Sandwich", desc: "Crispy golden grilled sourdough stuffed with baby spinach, sun-dried tomatoes, and gooey melted cheese." },
            { name: "Savoury Puff Pastry Pinwheels", price: "95 EGP", img: "img/meals/6.jfif", subLabel: "Pastry", desc: "Flaky baked puff pastry rolls filled with seasoned smoked turkey, melted cheese, and fresh thyme." },
            { name: "Arugula, Prosciutto & Feta Flatbread", price: "160 EGP", img: "img/meals/7.jfif", subLabel: "Flatbread", desc: "Crispy flatbread topped with peppery wild arugula, crumbled feta, cured slices, and balsamic glaze." },
            { name: "Grilled Chicken & Creamy Mushroom Fettuccine", price: "185 EGP", img: "img/meals/8.jfif", subLabel: "Pasta", desc: "Tender pan-seared chicken breast slices served over fettuccine pasta with rich mushroom cream sauce." },
            { name: "Herb-Stuffed Roasted Meat Roll", price: "220 EGP", img: "img/meals/9.jfif", subLabel: "Main Dish", desc: "Slow-roasted tenderloin rolled with savory herbs, garlic, and melted cheese in a rich pan jus." },
            { name: "Loaded Cheddar & Jalapeño Fries", price: "90 EGP", img: "img/meals/10.jfif", subLabel: "Sides", desc: "Crispy golden fries smothered in warm cheddar sauce, smoky beef bits, sliced jalapeños, and herbs." },
            { name: "Herb-Glazed Lamb Chops with Mashed Potatoes", price: "240 EGP", img: "img/meals/11.jfif", subLabel: "Main Dish", desc: "Juicy char-grilled lamb chops with caramelized lemon and thyme gravy over creamy mashed potatoes." },
            { name: "Gourmet Taco Platter with Salsa & Guacamole", price: "190 EGP", img: "img/meals/12.jfif", subLabel: "Platter", desc: "Assorted soft corn tacos filled with spiced shrimp, grilled chicken, and black beans with fresh dips." },
            { name: "Crispy Blue Cheese & Herb Crusted Cutlet", price: "175 EGP", img: "img/meals/13.jfif", subLabel: "Main Dish", desc: "Golden panko-crusted cutlet glazed with sweet-savory sauce and topped with creamy blue cheese crumbles." },
            { name: "Savory Pizza Muffins with Olives & Basil", price: "110 EGP", img: "img/meals/14.jfif", subLabel: "Bakery", desc: "Fluffy baked savory muffins loaded with melted cheese, cherry tomatoes, black olives, and fresh basil." },
            { name: "Grilled Chicken Skewers with Rice, Fries & Dips", price: "185 EGP", img: "img/meals/15.jfif", subLabel: "Grill Platter", desc: "Marinated grilled shish tawook skewers served with herbed rice, crispy fries, fresh salad, and garlic dip." },
            { name: "Sesame Glazed Rack Chops with Greens", price: "235 EGP", img: "img/meals/16.jfif", subLabel: "Main Dish", desc: "Seared rack chops coated in a glossy roasted sesame glaze alongside sautéed seasonal greens." },
            { name: "Crispy Spring Rolls with Sweet Chili Dip", price: "85 EGP", img: "img/meals/17.jfif", subLabel: "Starter", desc: "Crunchy golden vegetable and chicken spring rolls topped with sesame seeds and sweet chili sauce." },
            { name: "Crispy Cheese Croquettes with Tomato Sauce", price: "105 EGP", img: "img/meals/18.jfif", subLabel: "Starter", desc: "Golden fried mac-and-cheese croquette balls with a molten cheddar center and rich marinara dip." }
        ]
    },
    drinks: {
        title: "Drinks Menu & Prices",
        label: "Drinks",
        items: [
            { name: "Blood Orange & Rosemary Cooler", price: "75 EGP", img: "img/Drinks/1.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Chilled ruby blood orange juice over crystal ice garnished with fresh aromatic rosemary." },
            { name: "Spiced Cinnamon & Star Anise Warm Cider", price: "70 EGP", img: "img/Drinks/2.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Warm golden pear and apple infusion steeped with whole cinnamon sticks, star anise, and cardamom." },
            { name: "Tropical Passion Fruit & Mint Fizz", price: "80 EGP", img: "img/Drinks/3.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Refreshing sparkling passion fruit cooler with real fruit seeds, crushed ice, and garden mint." },
            { name: "Blackberry & Wild Berry Smoothie", price: "85 EGP", img: "img/Drinks/4.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Thick velvety blend of ripe blackberries and forest berries topped with whole fruit and mint." },
            { name: "Blue Citrus & Blueberry Sparkler", price: "75 EGP", img: "img/Drinks/5.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Vibrant chilled blue citrus refresher layered with fresh blueberries and zesty lemon wheels." },
            { name: "Pink Guava, Cream & Chia Parfait Drink", price: "90 EGP", img: "img/Drinks/6.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Creamy pink guava smoothie layered with chia seeds and topped with a scoop of vanilla ice cream." },
            { name: "Rosé Citrus & Rosemary Spritz", price: "85 EGP", img: "img/Drinks/7.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Crisp botanical pink grapefruit spritz served chilled in a crystal glass with lime and rosemary." },
            { name: "Classic Espresso Affogato with Vanilla Scoop", price: "95 EGP", img: "img/Drinks/8.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Hot freshly pulled rich espresso poured directly over a cold scoop of artisan vanilla gelato." },
            { name: "Velvet Latte Art Cappuccino", price: "65 EGP", img: "img/Drinks/9.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Smooth double-shot espresso topped with silky steamed micro-foam and a dusting of cocoa." },
            { name: "Rich Dark Chocolate Milkshake", price: "85 EGP", img: "img/Drinks/10.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Indulgent thick chocolate shake blended with dark cocoa and crowned with shaved chocolate chunks." },
            { name: "Creamy Matcha Green Tea Latte", price: "75 EGP", img: "img/Drinks/11.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Ceremonial-grade Japanese matcha whisked with velvety steamed milk for a smooth earthy finish." },
            { name: "Lavender Citrus Sparkler", price: "80 EGP", img: "img/Drinks/12.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Floral lavender infusion shaken with chilled sparkling water and a slice of sweet blood orange." },
            { name: "Rich Hot Mocha Espresso", price: "65 EGP", img: "img/Drinks/13.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Warm comforting blend of dark roasted espresso and melted Belgian chocolate with velvety crema." },
            { name: "Warm Herbal Mint Tea", price: "45 EGP", img: "img/Drinks/14.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Soothing freshly brewed loose-leaf tea served hot with fresh green mint leaves and wildflower honey." },
            { name: "Spiced Rose & Pistachio Hot Milk", price: "85 EGP", img: "img/Drinks/15.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Fragrant warm rose-infused milk topped with crushed green pistachios, saffron strands, and cinnamon." },
            { name: "Chocolate Shavings Hot Cocoa", price: "70 EGP", img: "img/Drinks/16.jfif", subType: "warm", subLabel: "Warm Drink", desc: "Creamy hot cocoa topped with frothy whipped milk foam and generous dark chocolate curls." },
            { name: "Mixed Berry & Edible Flower Cooler", price: "90 EGP", img: "img/Drinks/17.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Chilled dark berry mocktail garnished with fresh blackberries, raspberries, and edible blossoms." },
            { name: "Creamy Avocado Smoothie", price: "85 EGP", img: "img/Drinks/18.jfif", subType: "fresh-cold", subLabel: "Fresh & Cold", desc: "Smooth chilled ripe avocado blended with milk and a touch of honey for a rich, energizing drink." },
            { name: "Still Mineral Water", price: "20 EGP", img: "img/Drinks/19.jfif", subType: "water", subLabel: "Water", desc: "Pure chilled bottled mineral water served fresh alongside your meal." }
        ]
    },
    desserts: {
        title: "Desserts Menu & Prices",
        label: "Desserts",
        items: [
            { name: "Blueberry Cream Swirl Rolls", price: "80 EGP", img: "img/Desserts/1.jfif", subLabel: "Dessert", desc: "Soft warm pastry rolls swirled with tangy blueberry compote, cream cheese frosting, and fresh berries." },
            { name: "Glazed Pecan & Cinnamon Loaf Cake", price: "90 EGP", img: "img/Desserts/2.jfif", subLabel: "Cake", desc: "Moist brown-sugar cinnamon loaf topped with sweet vanilla glaze and crunchy roasted pecans." },
            { name: "Cranberry, Almond & Honey Sweet Flatbread", price: "115 EGP", img: "img/Desserts/3.jfif", subLabel: "Sweet Flatbread", desc: "Warm golden flatbread topped with sweet whipped ricotta, dried cranberries, sliced almonds, and honey." },
            { name: "Berry Glaze & Vanilla Iced Cinnamon Rolls", price: "85 EGP", img: "img/Desserts/4.jfif", subLabel: "Dessert", desc: "Fluffy oven-baked cinnamon rolls drizzled with creamy vanilla icing and tart red berry reduction." },
            { name: "Pomegranate Glaze Cheesecake Cups", price: "95 EGP", img: "img/Desserts/5.jfif", subLabel: "Cheesecake", desc: "Mini biscuit-crust cheesecakes topped with glossy ruby pomegranate jelly and fresh mint." },
            { name: "Fresh Mango Custard Tartlets", price: "90 EGP", img: "img/Desserts/6.jfif", subLabel: "Tart", desc: "Crisp buttery tart shells filled with smooth vanilla pastry cream and ripe diced mango cubes." },
            { name: "White Chocolate & Raspberry Chunk Cookies", price: "75 EGP", img: "img/Desserts/7.jfif", subLabel: "Cookies", desc: "Soft-baked golden cookies studded with creamy white chocolate chunks and tart red raspberries." },
            { name: "Triple Chocolate Fudge Cake with Ice Cream", price: "120 EGP", img: "img/Desserts/8.jfif", subLabel: "Cake", desc: "Rich dark chocolate layer cake crowned with vanilla ice cream scoops, chocolate curls, and pistachios." },
            { name: "Salted Caramel & Roasted Hazelnut Mini Cheesecakes", price: "105 EGP", img: "img/Desserts/9.jfif", subLabel: "Cheesecake", desc: "Creamy mini cheesecakes draped in warm salted caramel sauce and crunchy whole hazelnuts." },
            { name: "White Chocolate & Berry Truffle Balls", price: "85 EGP", img: "img/Desserts/10.jfif", subLabel: "Dessert", desc: "Velvety berry cream centers dipped in crisp white chocolate shells with dark chocolate drizzle." },
            { name: "Flaky Cream-Filled Danish Rings", price: "75 EGP", img: "img/Desserts/11.jfif", subLabel: "Pastry", desc: "Golden laminated puff pastry rings baked crisp and filled with smooth sweet vanilla custard." },
            { name: "Roasted Sweet Potato Rounds with Cream, Pomegranate & Walnuts", price: "95 EGP", img: "img/Desserts/12.jfif", subLabel: "Dessert", desc: "Caramelized sweet potato medallions topped with whipped cream cheese, ruby pomegranate, and honey." },
            { name: "Berry & Whipped Cream Belgian Waffle", price: "110 EGP", img: "img/Desserts/13.jfif", subLabel: "Waffle", desc: "Crisp golden Belgian waffle topped with vanilla cream, fresh raspberries, and berry syrup." },
            { name: "Red Berry Glaze & Cream Cinnamon Rolls", price: "85 EGP", img: "img/Desserts/14.jfif", subLabel: "Dessert", desc: "Warm spiraled rolls finished with velvety cream icing and a generous pour of berry compote." },
            { name: "Fudgy Chocolate Brownie Bites with Fresh Raspberries", price: "90 EGP", img: "img/Desserts/15.jfif", subLabel: "Brownie", desc: "Dense, rich dark chocolate brownie squares each crowned with a fresh juicy raspberry." },
            { name: "Cookies & Cream Glazed Cinnamon Roll", price: "95 EGP", img: "img/Desserts/16.jfif", subLabel: "Dessert", desc: "Warm cinnamon roll smothered in sweet cream glaze and crushed chocolate sandwich cookies." },
            { name: "Honey-Drizzled Walnut & Berry Puff Pastry", price: "100 EGP", img: "img/Desserts/17.jfif", subLabel: "Pastry", desc: "Flaky golden puff pastry pockets filled with sweet cream, cranberries, walnuts, and warm honey." },
            { name: "Berry Crepes with Dark Chocolate Drizzle & Raspberries", price: "105 EGP", img: "img/Desserts/18.jfif", subLabel: "Crepes", desc: "Delicate folded berry crepes drizzled with melted dark chocolate and topped with fresh raspberries." }
        ]
    }
};

let cart = [];
let activeDrinkSub = "all";
let pendingOrderData = null;
let deliveryTimerInterval = null;
let audioCtx = null;

function getAudioContext() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!audioCtx) {
        audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
    }
    return audioCtx;
}

function playClickSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(340, ctx.currentTime + 0.045);

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.055);
}

function playPaymentSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [880, 1318.5, 1760];
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = ctx.currentTime + i * 0.07;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.07, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.3);
    });
}

function parsePriceValue(priceStr) {
    const num = parseFloat(String(priceStr).replace(/[^\d.]/g, ""));
    return Number.isNaN(num) ? 0 : num;
}

function getCartTotalEgp() {
    return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartPill(bump = false) {
    const summaryEl = document.getElementById("nav-cart-summary");
    const pillBtn = document.getElementById("creative-cart-btn");
    const count = getCartCount();
    const total = getCartTotalEgp();

    if (summaryEl) {
        summaryEl.textContent = `${count} ${count === 1 ? "item" : "items"} • ${total} EGP`;
    }
    if (bump && pillBtn) {
        pillBtn.classList.remove("pulse-bump");
        void pillBtn.offsetWidth;
        pillBtn.classList.add("pulse-bump");
    }
}

function renderDrinkBestSellers() {
    const container = document.getElementById("drinks-best-sellers");
    if (!container) return;

    const entries =
        activeDrinkSub === "all"
            ? Object.values(DRINK_BEST_SELLERS)
            : [DRINK_BEST_SELLERS[activeDrinkSub]].filter(Boolean);

    container.innerHTML = entries
        .map(
            (b) => `
            <div class="best_item">
                <img src="${b.img}" alt="${b.title}">
                <div class="best_info">
                    <span class="badge">★ Best Seller</span>
                    <h3>${b.title}</h3>
                    <p>${b.desc}</p>
                    <button type="button" class="Order" onclick="addItemToCart('${b.catKey}', ${b.index}, true)">
                        Add to Basket — ${b.priceText}
                    </button>
                </div>
            </div>
        `
        )
        .join("");
}

function renderCategoryShowcase(catKey) {
    const containerMap = {
        meals: "meals-gallery",
        drinks: "drinks-gallery",
        desserts: "desserts-gallery"
    };
    const container = document.getElementById(containerMap[catKey]);
    if (!container) return;

    let list = categoryData[catKey].items.map((item, idx) => ({ ...item, idx }));
    if (catKey === "drinks" && activeDrinkSub !== "all") {
        list = list.filter((entry) => entry.subType === activeDrinkSub);
    }

    container.innerHTML = list
        .map(
            (entry) => `
            <article class="showcase-card">
                <div>
                    <div class="showcase-media">
                        <img src="${entry.img}" alt="${entry.name}">
                    </div>
                    <div class="showcase-body">
                        <span class="showcase-subtag">${entry.subLabel}</span>
                        <h3 class="showcase-title">${entry.name}</h3>
                        <p class="showcase-desc">${entry.desc}</p>
                    </div>
                </div>
                <div class="showcase-footer">
                    <span class="showcase-price">${entry.price}</span>
                    <button type="button" class="add-cart-btn" onclick="addItemToCart('${catKey}', ${entry.idx}, false)">
                        + Add
                    </button>
                </div>
            </article>
        `
        )
        .join("");

    if (catKey === "drinks") {
        renderDrinkBestSellers();
    }
}

function filterDrinkSubcategory(subType) {
    activeDrinkSub = subType;
    document.querySelectorAll(".drink-tab").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.drinkSub === subType);
    });
    renderCategoryShowcase("drinks");
}

function addItemToCart(catKey, index, goToCart = false) {
    const cat = categoryData[catKey];
    if (!cat || !cat.items[index]) return;

    const item = cat.items[index];
    const key = `${catKey}-${index}`;
    const existing = cart.find((c) => c.key === key);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            key,
            name: item.name,
            category: cat.label,
            unitPrice: parsePriceValue(item.price),
            img: item.img,
            quantity: 1
        });
    }

    updateCartPill(true);
    renderCart();

    const feedbackEl = document.getElementById("demo-feedback");
    if (feedbackEl) {
        feedbackEl.textContent = `Added "${item.name}" to your basket.`;
    }

    if (goToCart) {
        showPage("booking");
    }
}

function changeCartQty(key, delta) {
    const target = cart.find((c) => c.key === key);
    if (!target) return;

    const nextQty = target.quantity + delta;
    if (nextQty <= 0) {
        removeCartItem(key);
        return;
    }
    target.quantity = nextQty;
    updateCartPill(true);
    renderCart();
}

function removeCartItem(key) {
    cart = cart.filter((c) => c.key !== key);
    updateCartPill(true);
    renderCart();
}

function renderCart() {
    const listEl = document.getElementById("cart-items-list");
    const totalEl = document.getElementById("cart-total-display");
    if (!listEl || !totalEl) return;

    totalEl.textContent = `${getCartTotalEgp()} EGP`;

    if (!cart.length) {
        listEl.innerHTML = `<div class="empty-cart-box">Your basket is empty. Pick one or more items from Categories or Daily Menu to start.</div>`;
        return;
    }

    listEl.innerHTML = cart
        .map((item) => {
            const subtotal = item.unitPrice * item.quantity;
            return `
                <div class="cart-row-item">
                    <div class="cart-row-info">
                        <img src="${item.img}" alt="${item.name}" class="menu-thumb">
                        <div>
                            <strong>${item.name}</strong>
                            <span>${item.category} • ${item.unitPrice} EGP each</span>
                        </div>
                    </div>
                    <div class="cart-row-controls">
                        <button type="button" class="qty-btn" onclick="changeCartQty('${item.key}', -1)" aria-label="Decrease quantity">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button type="button" class="qty-btn" onclick="changeCartQty('${item.key}', 1)" aria-label="Increase quantity">+</button>
                        <span class="cart-row-subtotal">${subtotal} EGP</span>
                        <button type="button" class="remove-item-btn" onclick="removeCartItem('${item.key}')">Remove</button>
                    </div>
                </div>
            `;
        })
        .join("");
}

function toggleVisaFields() {
    const method = document.getElementById("payment-method").value;
    const visaBox = document.getElementById("visa-fields");
    if (visaBox) {
        visaBox.style.display = method === "Visa" ? "flex" : "none";
    }
}

function showPage(viewName) {
    const views = {
        home: document.getElementById("home-view"),
        categories: document.getElementById("categories-view"),
        menu: document.getElementById("menu-view"),
        booking: document.getElementById("booking-view")
    };

    Object.values(views).forEach((el) => {
        if (el) el.style.display = "none";
    });

    if (views[viewName]) {
        views[viewName].style.display = "block";
    }

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("active", link.dataset.view === viewName);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMenuTable(selectedKey) {
    const info = categoryData[selectedKey];
    if (!info) return;

    const titleEl = document.getElementById("menu-table-title");
    const tbody = document.getElementById("menu-table-body");
    const tableSelect = document.getElementById("menu-category-select");
    const mainSelect = document.getElementById("category");

    if (titleEl) titleEl.textContent = info.title;
    if (tableSelect && tableSelect.value !== selectedKey) tableSelect.value = selectedKey;
    if (mainSelect && mainSelect.value !== selectedKey) mainSelect.value = selectedKey;

    if (tbody) {
        tbody.innerHTML = info.items
            .map(
                (entry, idx) => `
                <tr>
                    <td>
                        <div class="menu-item-cell">
                            <img src="${entry.img}" alt="${entry.name}" class="menu-thumb">
                            <span>${entry.name}</span>
                        </div>
                    </td>
                    <td>${entry.price}</td>
                    <td>
                        <button type="button" class="table-order-btn" onclick="addItemToCart('${selectedKey}', ${idx}, false)">
                            + Add
                        </button>
                    </td>
                </tr>
            `
            )
            .join("");
    }
}

function filterCategory() {
    const selected = document.getElementById("category").value;

    document.getElementById("meals-section").style.display = "none";
    document.getElementById("drinks-section").style.display = "none";
    document.getElementById("desserts-section").style.display = "none";

    document.getElementById(`${selected}-section`).style.display = "block";
    renderCategoryShowcase(selected);
    renderMenuTable(selected);
}

function syncMenuFromTableSelect() {
    const selected = document.getElementById("menu-category-select").value;
    document.getElementById("category").value = selected;
    filterCategory();
}

function openConfirmationStep(event) {
    event.preventDefault();
    const feedbackEl = document.getElementById("demo-feedback");

    if (!cart.length) {
        if (feedbackEl) {
            feedbackEl.textContent = "Please add at least one item to your basket before confirming.";
        }
        return;
    }

    const nameVal = document.getElementById("customer-name").value.trim();
    const phoneVal = document.getElementById("customer-phone").value.trim();
    const emailVal = document.getElementById("customer-email").value.trim();
    const addressVal = document.getElementById("customer-address").value.trim();
    const paymentVal = document.getElementById("payment-method").value;
    const channelVal = document.getElementById("notification-channel").value;
    const notesVal = document.getElementById("customer-message").value.trim();
    const totalEgp = getCartTotalEgp();

    const itemsSummary = cart
        .map((c) => `${c.quantity}x ${c.name} (${c.unitPrice * c.quantity} EGP)`)
        .join(", ");

    pendingOrderData = {
        customerName: nameVal,
        customerPhone: phoneVal,
        customerEmail: emailVal,
        deliveryAddress: addressVal,
        paymentMethod: paymentVal,
        channel: channelVal,
        notes: notesVal || "None",
        itemsSummary,
        totalEgp
    };

    const summaryBox = document.getElementById("confirmation-summary-content");
    const confirmCard = document.getElementById("order-confirmation-box");

    if (summaryBox && confirmCard) {
        summaryBox.innerHTML = `
            <div><strong>Items:</strong> ${itemsSummary}</div>
            <div><strong>Total Amount:</strong> ${totalEgp} EGP</div>
            <div><strong>Customer:</strong> ${nameVal} (${phoneVal})</div>
            <div><strong>Address:</strong> ${addressVal}</div>
            <div><strong>Payment:</strong> ${paymentVal} • <strong>Simulated Alert:</strong> ${channelVal}</div>
            <div><strong>Estimated Delivery:</strong> 1 minute (simulation)</div>
        `;
        confirmCard.style.display = "block";
        confirmCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function cancelConfirmationStep() {
    pendingOrderData = null;
    const confirmCard = document.getElementById("order-confirmation-box");
    if (confirmCard) confirmCard.style.display = "none";
}

async function sendOrderToFormspree(orderObj) {
    const payload = new URLSearchParams();
    payload.append("customer_name", orderObj.customerName);
    payload.append("customer_phone", orderObj.customerPhone);
    payload.append("customer_email", orderObj.customerEmail);
    payload.append("delivery_address", orderObj.deliveryAddress);
    payload.append("items", orderObj.itemsSummary);
    payload.append("total_price", `${orderObj.totalEgp} EGP`);
    payload.append("payment_method", orderObj.paymentMethod);
    payload.append("simulated_alert_channel", orderObj.channel);
    payload.append("notes", orderObj.notes);

    await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: payload.toString()
    });
}

function startOneMinuteDeliverySimulation(orderObj) {
    if (deliveryTimerInterval) {
        clearInterval(deliveryTimerInterval);
    }

    const trackerEl = document.getElementById("delivery-tracker");
    const badgeEl = document.getElementById("delivery-status-badge");
    const summaryEl = document.getElementById("delivery-summary-text");
    const scooterEl = document.getElementById("scooter-runner");
    const timerLabelEl = document.getElementById("delivery-timer-label");
    const arrivalBoxEl = document.getElementById("arrival-alert-box");

    if (!trackerEl || !scooterEl || !timerLabelEl || !arrivalBoxEl) return;

    trackerEl.style.display = "block";
    arrivalBoxEl.style.display = "none";
    arrivalBoxEl.innerHTML = "";

    if (badgeEl) {
        badgeEl.textContent = "En Route • 1 Min";
        badgeEl.classList.remove("arrived");
    }

    if (summaryEl) {
        summaryEl.textContent = `${orderObj.itemsSummary} • Total: ${orderObj.totalEgp} EGP • Simulated ${orderObj.channel} Alert`;
    }

    const roadEl = scooterEl.parentElement;
    const maxTravel = roadEl ? Math.max(80, roadEl.clientWidth - 65) : 360;

    let remaining = DELIVERY_DURATION_SECONDS;
    scooterEl.style.transform = "translateX(0px)";
    timerLabelEl.textContent = `Arriving in ${remaining}s`;

    deliveryTimerInterval = setInterval(() => {
        remaining -= 1;
        const elapsed = DELIVERY_DURATION_SECONDS - Math.max(0, remaining);
        const progress = Math.min(1, elapsed / DELIVERY_DURATION_SECONDS);
        scooterEl.style.transform = `translateX(${Math.round(progress * maxTravel)}px)`;

        if (remaining > 0) {
            timerLabelEl.textContent = `Arriving in ${remaining}s`;
        } else {
            clearInterval(deliveryTimerInterval);
            deliveryTimerInterval = null;
            timerLabelEl.textContent = "Delivered";

            if (badgeEl) {
                badgeEl.textContent = "Arrived";
                badgeEl.classList.add("arrived");
            }

            const targetInfo =
                orderObj.channel === "WhatsApp"
                    ? `Simulated WhatsApp Alert (${orderObj.customerPhone})`
                    : `Simulated Email Alert (${orderObj.customerEmail})`;

            arrivalBoxEl.innerHTML = `
                <span class="check-circle" aria-hidden="true">✓</span>
                <span>
                    ${targetInfo}: Your order (${orderObj.itemsSummary} — ${orderObj.totalEgp} EGP) has arrived at ${orderObj.deliveryAddress}. Please collect your order!
                </span>
            `;
            arrivalBoxEl.style.display = "flex";
        }
    }, 1000);
}

function resetCheckoutForm() {
    const form = document.getElementById("booking-form");
    if (form) form.reset();
    toggleVisaFields();
    cart = [];
    updateCartPill(false);
    renderCart();
}

async function finalizeConfirmedOrder() {
    if (!pendingOrderData) return;

    playPaymentSound();

    const orderToProcess = { ...pendingOrderData };
    pendingOrderData = null;

    const confirmCard = document.getElementById("order-confirmation-box");
    if (confirmCard) confirmCard.style.display = "none";

    const feedbackEl = document.getElementById("demo-feedback");
    if (feedbackEl) {
        feedbackEl.textContent = `Payment & order confirmed! Simulated ${orderToProcess.channel} confirmation shown. Rider arriving in 1 minute.`;
    }

    try {
        await sendOrderToFormspree(orderToProcess);
    } catch (_) {
        // Simulation continues smoothly even if offline
    }

    resetCheckoutForm();
    startOneMinuteDeliverySimulation(orderToProcess);
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        const clickable = e.target.closest("button, a.nav-link");
        if (!clickable) return;
        if (clickable.id === "finalize-order-btn") return;
        playClickSound();
    });

    renderCategoryShowcase("meals");
    renderCategoryShowcase("drinks");
    renderCategoryShowcase("desserts");
    renderMenuTable("meals");
    renderCart();
    updateCartPill(false);
    toggleVisaFields();
    showPage("home");
});
