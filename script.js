const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzdlayv";
const STORAGE_KEYS = {
    invoices: "eatery_invoices_v1",
    counter: "eatery_invoice_counter_v1",
    visits: "eatery_visits_v1"
};

const categoryData = {
    meals: {
        title: "Meals Menu & Prices",
        label: "Meals",
        items: [
            {
                name: "Crunchy Rainbow Carrot & Beet Salad",
                price: "65 EGP",
                img: "img/meals/1.jfif",
                desc: "Crisp julienned carrots, beets, and fresh herbs tossed in a light citrus sesame dressing."
            },
            {
                name: "Cheesy Herb Garlic Bread",
                price: "75 EGP",
                img: "img/meals/2.jfif",
                desc: "Toasted artisan bread slices topped with melted mozzarella, garlic butter, and parsley."
            },
            {
                name: "Walnut, Cranberry & Goat Cheese Flatbread",
                price: "145 EGP",
                img: "img/meals/3.jfif",
                desc: "Warm stone-baked flatbread layered with creamy goat cheese, toasted walnuts, cranberries, and thyme."
            },
            {
                name: "Grilled Halloumi & Herb Skewers",
                price: "135 EGP",
                img: "img/meals/4.jfif",
                desc: "Char-grilled golden halloumi skewers brushed with olive oil, oregano, and a sweet chili dip."
            },
            {
                name: "Spinach, Sun-Dried Tomato & Cheese Melt",
                price: "125 EGP",
                img: "img/meals/5.jfif",
                desc: "Crispy golden grilled sourdough stuffed with baby spinach, sun-dried tomatoes, and gooey melted cheese."
            },
            {
                name: "Savoury Puff Pastry Pinwheels",
                price: "95 EGP",
                img: "img/meals/6.jfif",
                desc: "Flaky baked puff pastry rolls filled with seasoned smoked turkey, melted cheese, and fresh thyme."
            },
            {
                name: "Arugula, Prosciutto & Feta Flatbread",
                price: "160 EGP",
                img: "img/meals/7.jfif",
                desc: "Crispy flatbread topped with peppery wild arugula, crumbled feta, cured slices, and balsamic glaze."
            },
            {
                name: "Grilled Chicken & Creamy Mushroom Fettuccine",
                price: "185 EGP",
                img: "img/meals/8.jfif",
                desc: "Tender pan-seared chicken breast slices served over fettuccine pasta with rich mushroom cream sauce."
            },
            {
                name: "Herb-Stuffed Roasted Meat Roll",
                price: "220 EGP",
                img: "img/meals/9.jfif",
                desc: "Slow-roasted tenderloin rolled with savory herbs, garlic, and melted cheese in a rich pan jus."
            },
            {
                name: "Loaded Cheddar & Jalapeño Fries",
                price: "90 EGP",
                img: "img/meals/10.jfif",
                desc: "Crispy golden fries smothered in warm cheddar sauce, smoky beef bits, sliced jalapeños, and herbs."
            },
            {
                name: "Herb-Glazed Lamb Chops with Mashed Potatoes",
                price: "240 EGP",
                img: "img/meals/11.jfif",
                desc: "Juicy char-grilled lamb chops with caramelized lemon and thyme gravy over creamy mashed potatoes."
            },
            {
                name: "Gourmet Taco Platter with Salsa & Guacamole",
                price: "190 EGP",
                img: "img/meals/12.jfif",
                desc: "Assorted soft corn tacos filled with spiced shrimp, grilled chicken, and black beans with fresh dips."
            },
            {
                name: "Crispy Blue Cheese & Herb Crusted Cutlet",
                price: "175 EGP",
                img: "img/meals/13.jfif",
                desc: "Golden panko-crusted cutlet glazed with sweet-savory sauce and topped with creamy blue cheese crumbles."
            },
            {
                name: "Savory Pizza Muffins with Olives & Basil",
                price: "110 EGP",
                img: "img/meals/14.jfif",
                desc: "Fluffy baked savory muffins loaded with melted cheese, cherry tomatoes, black olives, and fresh basil."
            },
            {
                name: "Grilled Chicken Skewers with Rice, Fries & Dips",
                price: "185 EGP",
                img: "img/meals/15.jfif",
                desc: "Marinated grilled shish tawook skewers served with herbed rice, crispy fries, fresh salad, and garlic dip."
            },
            {
                name: "Sesame Glazed Rack Chops with Greens",
                price: "235 EGP",
                img: "img/meals/16.jfif",
                desc: "Seared rack chops coated in a glossy roasted sesame glaze alongside sautéed seasonal greens."
            },
            {
                name: "Crispy Spring Rolls with Sweet Chili Dip",
                price: "85 EGP",
                img: "img/meals/17.jfif",
                desc: "Crunchy golden vegetable and chicken spring rolls topped with sesame seeds and sweet chili sauce."
            },
            {
                name: "Crispy Cheese Croquettes with Tomato Sauce",
                price: "105 EGP",
                img: "img/meals/18.jfif",
                desc: "Golden fried mac-and-cheese croquette balls with a molten cheddar center and rich marinara dip."
            }
        ]
    },
    drinks: {
        title: "Drinks Menu & Prices",
        label: "Drinks",
        items: [
            {
                name: "Blood Orange & Rosemary Cooler",
                price: "75 EGP",
                img: "img/Drinks/1.jfif",
                desc: "Chilled ruby blood orange juice over crystal ice garnished with fresh aromatic rosemary."
            },
            {
                name: "Spiced Cinnamon & Star Anise Warm Cider",
                price: "70 EGP",
                img: "img/Drinks/2.jfif",
                desc: "Warm golden pear and apple infusion steeped with whole cinnamon sticks, star anise, and cardamom."
            },
            {
                name: "Tropical Passion Fruit & Mint Fizz",
                price: "80 EGP",
                img: "img/Drinks/3.jfif",
                desc: "Refreshing sparkling passion fruit cooler with real fruit seeds, crushed ice, and garden mint."
            },
            {
                name: "Blackberry & Wild Berry Smoothie",
                price: "85 EGP",
                img: "img/Drinks/4.jfif",
                desc: "Thick velvety blend of ripe blackberries and forest berries topped with whole fruit and mint."
            },
            {
                name: "Blue Citrus & Blueberry Sparkler",
                price: "75 EGP",
                img: "img/Drinks/5.jfif",
                desc: "Vibrant chilled blue citrus refresher layered with fresh blueberries and zesty lemon wheels."
            },
            {
                name: "Pink Guava, Cream & Chia Parfait Drink",
                price: "90 EGP",
                img: "img/Drinks/6.jfif",
                desc: "Creamy pink guava smoothie layered with chia seeds and topped with a scoop of vanilla ice cream."
            },
            {
                name: "Rosé Citrus & Rosemary Spritz",
                price: "85 EGP",
                img: "img/Drinks/7.jfif",
                desc: "Crisp botanical pink grapefruit spritz served chilled in a crystal glass with lime and rosemary."
            },
            {
                name: "Classic Espresso Affogato with Vanilla Scoop",
                price: "95 EGP",
                img: "img/Drinks/8.jfif",
                desc: "Hot freshly pulled rich espresso poured directly over a cold scoop of artisan vanilla gelato."
            },
            {
                name: "Velvet Latte Art Cappuccino",
                price: "65 EGP",
                img: "img/Drinks/9.jfif",
                desc: "Smooth double-shot espresso topped with silky steamed micro-foam and a dusting of cocoa."
            },
            {
                name: "Rich Dark Chocolate Milkshake",
                price: "85 EGP",
                img: "img/Drinks/10.jfif",
                desc: "Indulgent thick chocolate shake blended with dark cocoa and crowned with shaved chocolate chunks."
            },
            {
                name: "Creamy Matcha Green Tea Latte",
                price: "75 EGP",
                img: "img/Drinks/11.jfif",
                desc: "Ceremonial-grade Japanese matcha whisked with velvety steamed milk for a smooth earthy finish."
            },
            {
                name: "Lavender Citrus Sparkler",
                price: "80 EGP",
                img: "img/Drinks/12.jfif",
                desc: "Floral lavender infusion shaken with chilled sparkling water and a slice of sweet blood orange."
            },
            {
                name: "Rich Hot Mocha Espresso",
                price: "65 EGP",
                img: "img/Drinks/13.jfif",
                desc: "Warm comforting blend of dark roasted espresso and melted Belgian chocolate with velvety crema."
            },
            {
                name: "Warm Herbal Mint Tea",
                price: "45 EGP",
                img: "img/Drinks/14.jfif",
                desc: "Soothing freshly brewed loose-leaf tea served hot with fresh green mint leaves and wildflower honey."
            },
            {
                name: "Spiced Rose & Pistachio Hot Milk",
                price: "85 EGP",
                img: "img/Drinks/15.jfif",
                desc: "Fragrant warm rose-infused milk topped with crushed green pistachios, saffron strands, and cinnamon."
            },
            {
                name: "Chocolate Shavings Hot Cocoa",
                price: "70 EGP",
                img: "img/Drinks/16.jfif",
                desc: "Creamy hot cocoa topped with frothy whipped milk foam and generous dark chocolate curls."
            },
            {
                name: "Mixed Berry & Edible Flower Cooler",
                price: "90 EGP",
                img: "img/Drinks/17.jfif",
                desc: "Chilled dark berry mocktail garnished with fresh blackberries, raspberries, and edible blossoms."
            },
            {
                name: "Creamy Avocado Smoothie",
                price: "85 EGP",
                img: "img/Drinks/18.jfif",
                desc: "Smooth chilled ripe avocado blended with milk and a touch of honey for a rich, energizing drink."
            }
        ]
    },
    desserts: {
        title: "Desserts Menu & Prices",
        label: "Desserts",
        items: [
            {
                name: "Blueberry Cream Swirl Rolls",
                price: "80 EGP",
                img: "img/Desserts/1.jfif",
                desc: "Soft warm pastry rolls swirled with tangy blueberry compote, cream cheese frosting, and fresh berries."
            },
            {
                name: "Glazed Pecan & Cinnamon Loaf Cake",
                price: "90 EGP",
                img: "img/Desserts/2.jfif",
                desc: "Moist brown-sugar cinnamon loaf topped with sweet vanilla glaze and crunchy roasted pecans."
            },
            {
                name: "Cranberry, Almond & Honey Sweet Flatbread",
                price: "115 EGP",
                img: "img/Desserts/3.jfif",
                desc: "Warm golden flatbread topped with sweet whipped ricotta, dried cranberries, sliced almonds, and honey."
            },
            {
                name: "Berry Glaze & Vanilla Iced Cinnamon Rolls",
                price: "85 EGP",
                img: "img/Desserts/4.jfif",
                desc: "Fluffy oven-baked cinnamon rolls drizzled with creamy vanilla icing and tart red berry reduction."
            },
            {
                name: "Pomegranate Glaze Cheesecake Cups",
                price: "95 EGP",
                img: "img/Desserts/5.jfif",
                desc: "Mini biscuit-crust cheesecakes topped with glossy ruby pomegranate jelly and fresh mint."
            },
            {
                name: "Fresh Mango Custard Tartlets",
                price: "90 EGP",
                img: "img/Desserts/6.jfif",
                desc: "Crisp buttery tart shells filled with smooth vanilla pastry cream and ripe diced mango cubes."
            },
            {
                name: "White Chocolate & Raspberry Chunk Cookies",
                price: "75 EGP",
                img: "img/Desserts/7.jfif",
                desc: "Soft-baked golden cookies studded with creamy white chocolate chunks and tart red raspberries."
            },
            {
                name: "Triple Chocolate Fudge Cake with Ice Cream",
                price: "120 EGP",
                img: "img/Desserts/8.jfif",
                desc: "Rich dark chocolate layer cake crowned with vanilla ice cream scoops, chocolate curls, and pistachios."
            },
            {
                name: "Salted Caramel & Roasted Hazelnut Mini Cheesecakes",
                price: "105 EGP",
                img: "img/Desserts/9.jfif",
                desc: "Creamy mini cheesecakes draped in warm salted caramel sauce and crunchy whole hazelnuts."
            },
            {
                name: "White Chocolate & Berry Truffle Balls",
                price: "85 EGP",
                img: "img/Desserts/10.jfif",
                desc: "Velvety berry cream centers dipped in crisp white chocolate shells with dark chocolate drizzle."
            },
            {
                name: "Flaky Cream-Filled Danish Rings",
                price: "75 EGP",
                img: "img/Desserts/11.jfif",
                desc: "Golden laminated puff pastry rings baked crisp and filled with smooth sweet vanilla custard."
            },
            {
                name: "Roasted Sweet Potato Rounds with Cream, Pomegranate & Walnuts",
                price: "95 EGP",
                img: "img/Desserts/12.jfif",
                desc: "Caramelized sweet potato medallions topped with whipped cream cheese, ruby pomegranate, and honey."
            },
            {
                name: "Berry & Whipped Cream Belgian Waffle",
                price: "110 EGP",
                img: "img/Desserts/13.jfif",
                desc: "Crisp golden Belgian waffle topped with vanilla cream, fresh raspberries, and berry syrup."
            },
            {
                name: "Red Berry Glaze & Cream Cinnamon Rolls",
                price: "85 EGP",
                img: "img/Desserts/14.jfif",
                desc: "Warm spiraled rolls finished with velvety cream icing and a generous pour of berry compote."
            },
            {
                name: "Fudgy Chocolate Brownie Bites with Fresh Raspberries",
                price: "90 EGP",
                img: "img/Desserts/15.jfif",
                desc: "Dense, rich dark chocolate brownie squares each crowned with a fresh juicy raspberry."
            },
            {
                name: "Cookies & Cream Glazed Cinnamon Roll",
                price: "95 EGP",
                img: "img/Desserts/16.jfif",
                desc: "Warm cinnamon roll smothered in sweet cream glaze and crushed chocolate sandwich cookies."
            },
            {
                name: "Honey-Drizzled Walnut & Berry Puff Pastry",
                price: "100 EGP",
                img: "img/Desserts/17.jfif",
                desc: "Flaky golden puff pastry pockets filled with sweet cream, cranberries, walnuts, and warm honey."
            },
            {
                name: "Berry Crepes with Dark Chocolate Drizzle & Raspberries",
                price: "105 EGP",
                img: "img/Desserts/18.jfif",
                desc: "Delicate folded berry crepes drizzled with melted dark chocolate and topped with fresh raspberries."
            }
        ]
    }
};

let currentUnitPrice = 185;
let invoices = [];
let invoiceCounter = 1000;
let visitsCount = 1;

function parsePriceValue(priceStr) {
    const num = parseFloat(String(priceStr).replace(/[^\d.]/g, ""));
    return Number.isNaN(num) ? 0 : num;
}

function getAllMenuOptions() {
    const list = [];
    ["meals", "drinks", "desserts"].forEach((catKey) => {
        const catLabel = categoryData[catKey].label;
        categoryData[catKey].items.forEach((item, idx) => {
            list.push({
                key: `${catKey}:${idx}`,
                categoryKey: catKey,
                categoryLabel: catLabel,
                index: idx,
                name: item.name,
                price: item.price,
                unitPrice: parsePriceValue(item.price),
                img: item.img,
                desc: item.desc
            });
        });
    });
    return list;
}

function saveState() {
    localStorage.setItem(STORAGE_KEYS.invoices, JSON.stringify(invoices));
    localStorage.setItem(STORAGE_KEYS.counter, String(invoiceCounter));
}

function loadState() {
    const savedVisits = parseInt(localStorage.getItem(STORAGE_KEYS.visits) || "0", 10);
    visitsCount = (Number.isNaN(savedVisits) ? 0 : savedVisits) + 1;
    localStorage.setItem(STORAGE_KEYS.visits, String(visitsCount));

    const savedCounter = parseInt(localStorage.getItem(STORAGE_KEYS.counter) || "1000", 10);
    invoiceCounter = Number.isNaN(savedCounter) ? 1000 : savedCounter;

    try {
        const raw = localStorage.getItem(STORAGE_KEYS.invoices);
        invoices = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(invoices)) invoices = [];
    } catch (_) {
        invoices = [];
    }
}

function updateStatsDisplay() {
    const homeOrders = document.getElementById("home-orders-count");
    const homeVisits = document.getElementById("home-visits-count");
    const actVisits = document.getElementById("activity-visits");
    const actInvoices = document.getElementById("activity-invoices");
    const badge = document.getElementById("invoices-count-badge");

    if (homeOrders) homeOrders.textContent = String(invoices.length);
    if (homeVisits) homeVisits.textContent = String(visitsCount);
    if (actVisits) actVisits.textContent = String(visitsCount);
    if (actInvoices) actInvoices.textContent = String(invoices.length);
    if (badge) badge.textContent = `${invoices.length} ${invoices.length === 1 ? "Invoice" : "Invoices"}`;
}

function updateTotalPrice() {
    const qtyInput = document.getElementById("item-qty");
    const totalEl = document.getElementById("total-price-display");
    if (!qtyInput || !totalEl) return;

    let qty = parseInt(qtyInput.value, 10);
    if (Number.isNaN(qty) || qty < 1) {
        qty = 1;
    }
    const total = currentUnitPrice * qty;
    totalEl.textContent = `${total} EGP`;
}

function toggleVisaFields() {
    const method = document.getElementById("payment-method").value;
    const visaBox = document.getElementById("visa-fields");
    if (visaBox) {
        visaBox.style.display = method === "Visa / Credit Card" ? "flex" : "none";
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

function orderSpecificItem(categoryKey, index) {
    const cat = categoryData[categoryKey];
    if (!cat || !cat.items[index]) return;

    const item = cat.items[index];
    currentUnitPrice = parsePriceValue(item.price);

    document.getElementById("preview-img").src = item.img;
    document.getElementById("preview-img").alt = item.name;
    document.getElementById("preview-category").textContent = cat.label;
    document.getElementById("preview-price").textContent = item.price;
    document.getElementById("preview-name").textContent = item.name;
    document.getElementById("preview-desc").textContent = item.desc;

    document.getElementById("selected-item-input").value = `${item.name} — ${item.price}`;
    document.getElementById("item-qty").value = 1;
    document.getElementById("demo-feedback").textContent = "";
    document.getElementById("delivery-tracker").style.display = "none";

    updateTotalPrice();
    showPage("booking");
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
                    <td>${entry.name}</td>
                    <td>${entry.price}</td>
                    <td>
                        <button type="button" class="table-order-btn" onclick="orderSpecificItem('${selectedKey}', ${idx})">
                            Order
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
    renderMenuTable(selected);
}

function syncMenuFromTableSelect() {
    const selected = document.getElementById("menu-category-select").value;
    document.getElementById("category").value = selected;
    filterCategory();
}

async function sendInvoiceToFormspree(invoice) {
    const payload = new URLSearchParams();
    payload.append("invoice_number", invoice.id);
    payload.append("customer_name", invoice.customerName);
    payload.append("customer_phone", invoice.customerPhone);
    payload.append("customer_email", invoice.customerEmail);
    payload.append("item", invoice.itemName);
    payload.append("category", invoice.categoryLabel);
    payload.append("unit_price", `${invoice.unitPrice} EGP`);
    payload.append("quantity", String(invoice.quantity));
    payload.append("total_price", `${invoice.unitPrice * invoice.quantity} EGP`);
    payload.append("payment_method", invoice.paymentMethod);
    payload.append("notes", invoice.notes || "None");

    const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: payload.toString()
    });

    if (!response.ok) {
        throw new Error("Formspree request failed");
    }
}

function renderInvoices() {
    const container = document.getElementById("invoices-container");
    if (!container) return;

    updateStatsDisplay();

    if (!invoices.length) {
        container.innerHTML = `<div class="empty-invoices">No invoices yet. Place an order above to generate your first invoice.</div>`;
        return;
    }

    const allOptions = getAllMenuOptions();

    container.innerHTML = invoices
        .map((inv) => {
            const total = inv.unitPrice * inv.quantity;
            const optionsHtml = allOptions
                .map(
                    (opt) =>
                        `<option value="${opt.key}" ${opt.name === inv.itemName ? "selected" : ""}>${opt.categoryLabel}: ${opt.name} (${opt.price})</option>`
                )
                .join("");

            return `
                <article class="invoice-card" id="invoice-${inv.id}">
                    <div class="invoice-top">
                        <span class="invoice-id">Invoice #${inv.id}</span>
                        <span class="invoice-meta">${inv.createdAt} • ${inv.paymentMethod}</span>
                    </div>

                    <div class="invoice-body-grid">
                        <select class="invoice-item-select" aria-label="Change item for ${inv.id}" onchange="changeInvoiceItem('${inv.id}', this.value)">
                            ${optionsHtml}
                        </select>

                        <div class="qty-controls">
                            <button type="button" class="qty-btn" onclick="changeInvoiceQty('${inv.id}', -1)" aria-label="Decrease quantity">-</button>
                            <span class="qty-val">${inv.quantity}</span>
                            <button type="button" class="qty-btn" onclick="changeInvoiceQty('${inv.id}', 1)" aria-label="Increase quantity">+</button>
                        </div>

                        <div class="invoice-total">${total} EGP</div>
                    </div>

                    <div class="invoice-customer">
                        <strong>Customer:</strong> ${inv.customerName} | <strong>Phone:</strong> ${inv.customerPhone} | <strong>Email:</strong> ${inv.customerEmail}
                        ${inv.notes ? `<br><strong>Notes:</strong> ${inv.notes}` : ""}
                    </div>

                    <div class="invoice-actions">
                        <button type="button" class="inv-btn inv-send-btn" onclick="resendInvoice('${inv.id}')">Send / Update Email</button>
                        <button type="button" class="inv-btn inv-cancel-btn" onclick="cancelInvoice('${inv.id}')">Cancel Order</button>
                    </div>
                </article>
            `;
        })
        .join("");
}

function changeInvoiceQty(invoiceId, delta) {
    const inv = invoices.find((item) => item.id === invoiceId);
    if (!inv) return;

    const nextQty = inv.quantity + delta;
    if (nextQty <= 0) {
        cancelInvoice(invoiceId);
        return;
    }

    inv.quantity = nextQty;
    saveState();
    renderInvoices();
}

function changeInvoiceItem(invoiceId, selectedOptionKey) {
    const inv = invoices.find((item) => item.id === invoiceId);
    if (!inv) return;

    const [catKey, idxStr] = selectedOptionKey.split(":");
    const idx = parseInt(idxStr, 10);
    const chosen = categoryData[catKey] && categoryData[catKey].items[idx];
    if (!chosen) return;

    inv.itemName = chosen.name;
    inv.categoryLabel = categoryData[catKey].label;
    inv.unitPrice = parsePriceValue(chosen.price);

    saveState();
    renderInvoices();
}

function cancelInvoice(invoiceId) {
    invoices = invoices.filter((item) => item.id !== invoiceId);
    saveState();
    renderInvoices();
}

async function resendInvoice(invoiceId) {
    const inv = invoices.find((item) => item.id === invoiceId);
    const feedbackEl = document.getElementById("demo-feedback");
    if (!inv || !feedbackEl) return;

    feedbackEl.textContent = `Sending updated invoice #${inv.id} to email...`;
    try {
        await sendInvoiceToFormspree(inv);
        feedbackEl.textContent = `Invoice #${inv.id} (${inv.quantity}x ${inv.itemName} — ${inv.unitPrice * inv.quantity} EGP) sent to email!`;
    } catch (_) {
        feedbackEl.textContent = `Invoice #${inv.id} updated locally (check internet or Formspree endpoint if sending failed).`;
    }
}

function resetOrderFormFields() {
    const form = document.getElementById("booking-form");
    if (form) form.reset();

    document.getElementById("item-qty").value = 1;
    document.getElementById("payment-method").value = "Cash on Delivery";
    toggleVisaFields();
    updateTotalPrice();
}

async function handleOrderSubmit(event) {
    event.preventDefault();

    const submitBtn = document.getElementById("submit-order-btn");
    const feedbackEl = document.getElementById("demo-feedback");
    const trackerEl = document.getElementById("delivery-tracker");
    const summaryTextEl = document.getElementById("delivery-summary-text");

    const nameVal = document.getElementById("customer-name").value.trim();
    const phoneVal = document.getElementById("customer-phone").value.trim();
    const emailVal = document.getElementById("customer-email").value.trim();
    const notesVal = document.getElementById("customer-message").value.trim();
    const qtyVal = Math.max(1, parseInt(document.getElementById("item-qty").value, 10) || 1);
    const paymentVal = document.getElementById("payment-method").value;
    const itemNameVal = document.getElementById("preview-name").textContent.trim();
    const categoryLabelVal = document.getElementById("preview-category").textContent.trim();

    invoiceCounter += 1;
    const newInvoice = {
        id: `INV-${invoiceCounter}`,
        customerName: nameVal || "Guest",
        customerPhone: phoneVal || "N/A",
        customerEmail: emailVal || "N/A",
        itemName: itemNameVal,
        categoryLabel: categoryLabelVal,
        unitPrice: currentUnitPrice,
        quantity: qtyVal,
        paymentMethod: paymentVal,
        notes: notesVal,
        createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    invoices.unshift(newInvoice);
    saveState();
    renderInvoices();

    const totalEgp = `${newInvoice.unitPrice * newInvoice.quantity} EGP`;
    if (summaryTextEl) {
        summaryTextEl.textContent = `#${newInvoice.id} • ${qtyVal}x ${itemNameVal} • ${totalEgp} • ${paymentVal}`;
    }
    if (trackerEl) {
        trackerEl.style.display = "block";
    }

    if (submitBtn) submitBtn.disabled = true;
    if (feedbackEl) {
        feedbackEl.textContent = `Creating invoice #${newInvoice.id} and sending to email...`;
    }

    try {
        await sendInvoiceToFormspree(newInvoice);
        if (feedbackEl) {
            feedbackEl.textContent = `Invoice #${newInvoice.id} saved & sent to email! Form cleared for new orders.`;
        }
    } catch (_) {
        if (feedbackEl) {
            feedbackEl.textContent = `Invoice #${newInvoice.id} saved locally. Form cleared for new orders.`;
        }
    } finally {
        if (submitBtn) submitBtn.disabled = false;
        resetOrderFormFields();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    renderMenuTable(document.getElementById("category").value);
    updateTotalPrice();
    toggleVisaFields();
    renderInvoices();
    showPage("home");
});
