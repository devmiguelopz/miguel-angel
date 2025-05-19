import { gql } from '@apollo/client';

export const GET_AVAILABLE_MARKETS = gql`
  query GetAvailableMarkets {
    Channel {
      GetAvailableMarkets {
        name
        code
        flag
        currency {
          code
          name
          symbol
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Products($currency: String, $barcodeList: [String!]!, $shippingCountryCode: String) {
    Channel {
      Products(
        currency: $currency
        barcode_list: $barcodeList
        shipping_country_code: $shippingCountryCode
      ) {
        id
        title
        brand
        description
        tags
        sku
        quantity
        price {
          amount
          currency_code
          amount_incl_taxes
          tax_amount
          tax_rate
          compare_at
          compare_at_incl_taxes
        }
        variants {
          id
          barcode
          quantity
          sku
          title
        }
        barcode
        options {
          id
          name
          order
          values
        }
        categories {
          id
          name
        }
        images {
          id
          url
          width
          height
          order
        }
        product_shipping {
          id
          name
          description
          custom_price_enabled
          default
          shipping_country {
            id
            country
            price {
              amount
              currency_code
              amount_incl_taxes
              tax_amount
              tax_rate
            }
          }
        }
        supplier
        supplier_id
        imported_product
        referral_fee
        options_enabled
        digital
        origin
        return {
          return_right
          return_label
          return_cost
          supplier_policy
          return_address {
            same_as_business
            same_as_warehouse
            country
            timezone
            address
            address_2
            post_code
            return_city
          }
        }
      }
    }
  }
`;

export const GET_LINE_ITEMS_BY_SUPPLIER = gql`
  query GetLineItemsBySupplier($cartId: String!) {
    Cart {
      GetLineItemsBySupplier(cart_id: $cartId) {
        supplier {
          id
          name
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
        }
      }
    }
  }
`;
