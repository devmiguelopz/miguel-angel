import { gql } from '@apollo/client';

export const CREATE_CART = gql`
  mutation CreateCart($customerSessionId: String!, $currency: String!, $shippingCountry: String) {
    Cart {
      CreateCart(
        customer_session_id: $customerSessionId
        currency: $currency
        shipping_country: $shippingCountry
      ) {
        cart_id
        customer_session_id
        shipping_country
        line_items {
          id
          supplier
          image {
            id
            url
            width
            height
          }
          sku
          barcode
          brand
          product_id
          title
          variant_id
          variant_title
          variant {
            option
            value
          }
          quantity
          price {
            amount
            currency_code
            discount
            compare_at
            compare_at_incl_taxes
            amount_incl_taxes
            tax_amount
            tax_rate
          }
          shipping {
            id
            name
            description
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
          available_shippings {
            id
            name
            description
            country_code
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
        }
        subtotal
        shipping
        currency
        available_shipping_countries
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation AddItem($cartId: String!, $lineItems: [LineItemInput!]!) {
    Cart {
      AddItem(cart_id: $cartId, line_items: $lineItems) {
        cart_id
        customer_session_id
        shipping_country
        line_items {
          id
          supplier
          image {
            id
            url
            width
            height
          }
          sku
          barcode
          brand
          product_id
          title
          variant_id
          variant_title
          variant {
            option
            value
          }
          quantity
          price {
            amount
            currency_code
            discount
            compare_at
            compare_at_incl_taxes
            amount_incl_taxes
            tax_amount
            tax_rate
          }
          shipping {
            id
            name
            description
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
          available_shippings {
            id
            name
            description
            country_code
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
        }
        subtotal
        shipping
        currency
        available_shipping_countries
      }
    }
  }
`;

export const CREATE_CHECKOUT = gql`
  mutation CreateCheckout($cartId: String!) {
    Checkout {
      CreateCheckout(cart_id: $cartId) {
        buyer_accepts_purchase_conditions
        buyer_accepts_terms_conditions
        created_at
        updated_at
        id
        deleted_at
        success_url
        cancel_url
        payment_method
        email
        status
        checkout_url
        origin_payment_id
        billing_address {
          id
          first_name
          last_name
          phone_code
          phone
          company
          address1
          address2
          city
          province
          province_code
          country
          country_code
          zip
        }
        shipping_address {
          id
          first_name
          last_name
          phone_code
          phone
          company
          address1
          address2
          city
          province
          province_code
          country
          country_code
          zip
        }
        available_payment_methods {
          name
        }
        discount_code
        cart {
          cart_id
          customer_session_id
          shipping_country
          line_items {
            id
            supplier
            image {
              id
              url
              width
              height
            }
            sku
            barcode
            brand
            product_id
            title
            variant_id
            variant_title
            variant {
              option
              value
            }
            quantity
            price {
              amount
              currency_code
              discount
              compare_at
              compare_at_incl_taxes
              amount_incl_taxes
              tax_amount
              tax_rate
            }
            shipping {
              id
              name
              description
              price {
                amount
                currency_code
                amount_incl_taxes
                tax_amount
                tax_rate
              }
            }
            available_shippings {
              id
              name
              description
              country_code
              price {
                amount
                currency_code
                amount_incl_taxes
                tax_amount
                tax_rate
              }
            }
          }
          subtotal
          shipping
          currency
          available_shipping_countries
        }
        totals {
          currency_code
          subtotal
          shipping
          total
          taxes
          tax_rate
          discounts
        }
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($cartId: String!, $cartItemId: String!, $shippingId: String) {
    Cart {
      UpdateItem(cart_id: $cartId, cart_item_id: $cartItemId, shipping_id: $shippingId) {
        cart_id
        customer_session_id
        shipping_country
        line_items {
          id
          supplier
          image {
            id
            url
            width
            height
          }
          sku
          barcode
          brand
          product_id
          title
          variant_id
          variant_title
          variant {
            option
            value
          }
          quantity
          price {
            amount
            currency_code
            discount
            compare_at
            compare_at_incl_taxes
            amount_incl_taxes
            tax_amount
            tax_rate
          }
          shipping {
            id
            name
            description
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
          available_shippings {
            id
            name
            description
            country_code
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
        }
        subtotal
        shipping
        currency
        available_shipping_countries
      }
    }
  }
`;

export const UPDATE_CHECKOUT = gql`
  mutation UpdateCheckout(
    $paymentMethod: String
    $shippingAddress: AddressArgs
    $billingAddress: AddressArgs
    $buyerAcceptsPurchaseConditions: Boolean
    $buyerAcceptsTermsConditions: Boolean
    $email: String
    $checkoutId: String!
  ) {
    Checkout {
      UpdateCheckout(
        payment_method: $paymentMethod
        shipping_address: $shippingAddress
        billing_address: $billingAddress
        buyer_accepts_purchase_conditions: $buyerAcceptsPurchaseConditions
        buyer_accepts_terms_conditions: $buyerAcceptsTermsConditions
        email: $email
        checkout_id: $checkoutId
      ) {
        buyer_accepts_purchase_conditions
        buyer_accepts_terms_conditions
        created_at
        updated_at
        id
        deleted_at
        success_url
        cancel_url
        payment_method
        email
        status
        checkout_url
        origin_payment_id
        billing_address {
          id
          first_name
          last_name
          phone_code
          phone
          company
          address1
          address2
          city
          province
          province_code
          country
          country_code
          zip
        }
        shipping_address {
          id
          first_name
          last_name
          phone_code
          phone
          company
          address1
          address2
          city
          province
          province_code
          country
          country_code
          zip
        }
        available_payment_methods {
          name
        }
        discount_code
        cart {
          cart_id
          customer_session_id
          shipping_country
          line_items {
            id
            supplier
            image {
              id
              url
              width
              height
            }
            sku
            barcode
            brand
            product_id
            title
            variant_id
            variant_title
            variant {
              option
              value
            }
            quantity
            price {
              amount
              currency_code
              discount
              compare_at
              compare_at_incl_taxes
              amount_incl_taxes
              tax_amount
              tax_rate
            }
            shipping {
              id
              name
              description
              price {
                amount
                currency_code
                amount_incl_taxes
                tax_amount
                tax_rate
              }
            }
            available_shippings {
              id
              name
              description
              country_code
              price {
                amount
                currency_code
                amount_incl_taxes
                tax_amount
                tax_rate
              }
            }
          }
          subtotal
          shipping
          currency
          available_shipping_countries
        }
        totals {
          currency_code
          subtotal
          shipping
          total
          taxes
          tax_rate
          discounts
        }
      }
    }
  }
`;

export const CREATE_PAYMENT_KLARNA = gql`
  mutation CreatePaymentKlarna(
    $checkoutId: String!
    $countryCode: String!
    $href: String!
    $email: String!
  ) {
    Payment {
      CreatePaymentKlarna(
        checkout_id: $checkoutId
        country_code: $countryCode
        href: $href
        email: $email
      ) {
        order_id
        status
        purchase_country
        purchase_currency
        locale
        billing_address {
          given_name
          family_name
          email
          street_address
          postal_code
          city
          country
        }
        shipping_address {
          given_name
          family_name
          email
          street_address
          postal_code
          city
          country
        }
        order_amount
        order_tax_amount
        total_line_items_price
        order_lines {
          type
          name
          quantity
          unit_price
          tax_rate
          total_amount
          total_discount_amount
          total_tax_amount
          merchant_data
        }
        merchant_urls {
          terms
          checkout
          confirmation
          push
        }
        html_snippet
        started_at
        last_modified_at
        options {
          allow_separate_shipping_address
          date_of_birth_mandatory
          require_validate_callback_success
          phone_mandatory
          auto_capture
        }
        shipping_options {
          id
          name
          price
          tax_amount
          tax_rate
          preselected
        }
        merchant_data
        selected_shipping_option {
          id
          name
          price
          tax_amount
          tax_rate
          preselected
        }
      }
    }
  }
`;
