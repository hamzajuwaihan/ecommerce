CREATE TABLE "products" (
  "id" integer PRIMARY KEY,
  "product_name" varchar,
  "description" text,
  "stock_quantity" integer,
  "min_stock" integer,
  "max_stock" integer,
  "category_id" integer,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "ratings" (
  "id" integer PRIMARY KEY,
  "product_id" integer,
  "rating_value" "decimal(2, 1)",
  "user_id" integer,
  "created_at" timestamp
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "email" varchar,
  "hashed_password" varchar,
  "created_at" timestamp,
  "updated_at" timestamp,
  "role_id" integer
);

CREATE TABLE "user_addresses" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "address_type" varchar,
  "address" text,
  "city" varchar,
  "country" varchar
);

CREATE TABLE "comments" (
  "id" integer PRIMARY KEY,
  "product_id" integer,
  "parent_comment_id" integer,
  "comment_text" text,
  "user_id" integer,
  "created_at" timestamp
);

CREATE TABLE "roles" (
  "id" integer PRIMARY KEY,
  "role_name" varchar
);

CREATE TABLE "sellers" (
  "id" integer PRIMARY KEY,
  "user_id" integer UNIQUE,
  "company_name" varchar,
  "contact_information" text,
  "other_seller_details" text
);

CREATE TABLE "orders" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "total_amount" "decimal(10, 2)",
  "order_date" timestamp
);

CREATE TABLE "order_items" (
  "id" integer PRIMARY KEY,
  "order_id" integer,
  "product_id" integer,
  "quantity" integer,
  "unit_price" "decimal(10, 2)"
);

CREATE TABLE "shipping_info" (
  "id" integer PRIMARY KEY,
  "order_id" integer,
  "address_id" integer
);

CREATE TABLE "payments" (
  "id" integer PRIMARY KEY,
  "order_id" integer,
  "payment_date" timestamp,
  "payment_amount" "decimal(10, 2)"
);

CREATE TABLE "transactions" (
  "id" integer PRIMARY KEY,
  "order_id" integer,
  "seller_id" integer,
  "transaction_date" timestamp,
  "transaction_amount" "decimal(10, 2)"
);

CREATE TABLE "wishlist" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "product_id" integer,
  "quantity" integer,
  "added_at" timestamp
);

CREATE TABLE "categories" (
  "id" integer PRIMARY KEY,
  "category_name" varchar
);

CREATE TABLE "subcategories" (
  "id" integer PRIMARY KEY,
  "subcategory_name" varchar,
  "category_id" integer
);

CREATE TABLE "product_images" (
  "id" integer PRIMARY KEY,
  "product_id" integer,
  "image_url" varchar
);

CREATE TABLE "featured_products" (
  "id" integer PRIMARY KEY,
  "product_id" integer,
  "start_date" timestamp,
  "end_date" timestamp
);

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "ratings" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "ratings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id");

ALTER TABLE "user_addresses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("parent_comment_id") REFERENCES "comments" ("id");

ALTER TABLE "sellers" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "shipping_info" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "shipping_info" ADD FOREIGN KEY ("address_id") REFERENCES "user_addresses" ("id");

ALTER TABLE "payments" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("seller_id") REFERENCES "sellers" ("id");

ALTER TABLE "wishlist" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "wishlist" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "subcategories" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "product_images" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "featured_products" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
