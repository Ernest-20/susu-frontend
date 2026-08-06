import { useState, useMemo} from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";


// Sample partner shop products. later that will come from a real API call,
// e.g. GET /products - pulled from partner shops intergrated into the platform'

const MOCK_PRODUCTS = [
{
    id: "p1",
    name: "SAMSUNG 43-inch TV",
    price: 4000,
    shop: "Tunchi Store",
    category: "electronics",
    creditEligible: true,  // example of a product eligible for this user
},
{
    id: "p2",
    name: "Sofa",
    price: 5000,
    shop: "furnCo",
    category: "furniture",
    creditEligible: false,  // example of a product Not eligible for this user
},
{
    id: "p3",
    name: "Microwave",
    price: 500,
    shop: "Perry Shop",
    category: "appliance",
    creditEligible: true,  // example of a product eligible for this user
},
{
    id: "p4",
    name: "Rice Cooker",
    price: 350,
    shop: "Mansah Shop",
    category: "appliance",
    creditEligible: true,   // example of a product eligible for this user
},

];


// The list of category filter button at the top

const CATEGORIES =[
    {label: "ALL",value: "all"},
    {label: "Electronics",value: "electronics"},
    {label: "Appliance",value: "appliance"},
    {label: "Furniture",value: "furniture"},
];

export default function Marketplace() {
    // Which category filter is currently selected. Start on "all".
    const [activeCategory, setActiveCategory] = useState("all");

    // What the user has typed into the search box.
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        return MOCK_PRODUCTS.filter((product) => {
            const matchesCategory =
                activeCategory === "all" || product.category === activeCategory;

            const matchesSearch = product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const handleRequestCredit = (product) => {
        if (!product) {
            return;
        }

        console.log("Requesting soft credit for:", product.name);
    };

    return (
    <div className="min-h-screen bg-page pb-10">
        <header className="p-6 max-w-2xl mx-auto">
            <h1 className="text-xl mb-4">Shop</h1>


            {/* Search box controlled input,its value lives in screenTrem state */}
            <Input
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Category filter pills */}
            <div className="flex gap-2 overflow-x-auto mt-4 pb-1">
                {CATEGORIES.map((cat) =>(
                    <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`whitespace-nowrap rounded-pill border-2 px-4 py-2 text-sm font-semibold transition
                        ${
                            activeCategory === cat.value
                            ? "border-ink bg-ink text-white"
                            : "border-line text-ink-muted hover:border-ink-strong"
                        }`}
                     >
                        {cat.label}
                     </button>
                ))}
            </div>
        </header>

        <main className="max-w-2xl mx-auto px-6 flex flex-col gap-3">
            {/* Empty state if search/filter combo matches nothing */}
            {filteredProducts.length === 0 && (
            <Card className="text-center py-10">
                <p className="text-ink-muted ">No product match your search.</p>
            </Card>
            )}

            {/* Loop over the filtered list and render one product card per item  */}

            {filteredProducts.map((product) => (
                <Card key={product.id} className="flex gap-4 p-4">
                    <div
                      role="img"
                      arial-label={`${product.name} product image`}
                      classname="w-16 rounded-md bg-page border border-line flex items-center justify-center text-xs text-ink-muted flex-shrink-0"
                    >
                        img
                    </div>

                    <div className="flex-1">
                        <p className="font-semibold text-ink">{product.name}</p>
                        <p className="text-sm text-ink-muted mb-2">
                            GHS {product.price.toLocaleString()} · {product.shop}
                        </p>

                        {product.creditEligible && (
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-pill border bg-brand-50 text-brand-700 border-brand-100">
                                Soft credit eligible
                            </span>
                        )}
                    </div>
                </Card>
            ))}

            {/*
            "Request soft credit" button only makes sense to show if at least
             one visible product is eligible. Keeping it simple for now: alwaya
              shown at the butoon, disabled if nothing elgible is in view.
             */}
             <Button
             className="mt-2"
             disabled={!filteredProducts.some((p) => p.creditEligible)}
             onClick={() =>
                handleRequestCredit(filteredProducts.find((p) => p.creditEligible))
             }
             >
                Request soft credit
             </Button>
        </main>
    </div>
);
}
