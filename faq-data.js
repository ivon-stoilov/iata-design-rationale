const faqData = [
  {
    category: "Platform Redirection & Navigation",
    items: [
      {
        question: "How does training redirection work from iata.org to Store?",
        subItems: [
          {
            q: "What happens when a user selects a training course on iata.org?",
            a: "When a user selects a training from the training list on iata.org, they are automatically redirected to the corresponding training detail page hosted within Store."
          },
          {
            q: "Will users remain on iata.org during the training purchase flow?",
            a: "No. After selecting a training, users are redirected from iata.org to Store, where the next steps are managed."
          },
          {
            q: "Why are users redirected to Store?",
            a: "Store is the dedicated platform for purchase."
          }
        ]
      },
      {
        question: "Why do the return button labels change across the experience?",
        subItems: [
          {
            q: "When is the “Go back to shopping” label used?",
            a: "The “Go back to shopping” label is used only when the user originally entered the experience through the shopping flow."
          },
          {
            q: "What happens in all other navigation scenarios?",
            a: "In all other cases, the button label defaults to “Go back” only."
          },
          {
            q: "Why does the return label change dynamically?",
            a: "The label adapts based on the user’s entry point to provide clearer navigation context and more accurate return paths."
          }
        ]
      },
      {
        question: "Why is the “Go back to shopping” action removed after purchase of an physical item?",
        subItems: [
          {
            q: "Why is the “Go back to shopping” button removed from the confirmation screen after purchasing a physical item?",
            a: "After physical item purchase completion, the experience shifts focus from shopping to post-purchase actions and confirmation-related next steps. In this case, the main CTA is to Go back to shopping, hence the secondary on the top of the screen is removed."
          },
          {
            q: "What replaces the “Go back to shopping” action?",
            a: "The confirmation experience prioritizes post-purchase primary actions relevant to the completed transaction, making additional shopping actions secondary."
          }
        ]
      }
    ]
  },
  {
    category: "Dynamic Call-to-Action Logic",
    items: [
      {
        question: "Why does the CTA label change on the training detail page on Store?",
        subItems: [
          {
            q: "Why does the primary CTA label change from “Register” to “Add to Cart” on the training detail page on Store?",
            a: "The CTA changes to “Add to Cart” because trainings are now treated consistently with other Store products. Previously, training used “Register” and redirected users to the LMS. With the updated experience, users can add trainings directly to the cart and continue the purchase journey."
          },
          {
            q: "Does the CTA behavior depend on the user’s status or eligibility?",
            a: "Yes. The CTA behavior dynamically changes based on the user’s eligibility, authentication state, and training requirements. That can either be “Add to Cart” or “Apply”."
          },
          {
            q: "What happens if a training has prerequisites?",
            a: "If a training includes prerequisites, the primary CTA changes to “Apply” for logged-out users or users who do not yet meet the eligibility requirements."
          },
          {
            q: "What does an eligible logged-in user see when viewing training with prerequisites?",
            a: "If the user is logged in and eligible, they see “Add to Cart.”"
          }
        ]
      }
    ]
  },
  {
    category: "Authentication & Account Recognition",
    items: [
      {
        question: "How does the email recognition and login flow work?",
        subItems: [
          {
            q: "How does the email recognition and what happens after a user enters their email address?",
            a: "The system checks whether the entered email address is already associated with an existing account."
          },
          {
            q: "What happens if the email address is recognized?",
            a: "If the email already exists in the system, the user is prompted to enter their password and sign in."
          },
          {
            q: "What happens if the email address is not recognized?",
            a: "If the email is not associated with an existing account, the user is prompted to verify their email address and create a new account."
          },
          {
            q: "Why does the system check the email address first?",
            a: "This approach streamlines the authentication flow by guiding users directly to either sign in or account creation based on their account status."
          }
        ]
      },
      {
        question: "Why is the email field prefilled during sign-in after accessing an email link?",
        subItems: [
          {
            q: "Why is the user’s email address automatically prefilled after accessing IATA from an email link?",
            a: "When users enter the sign-in flow through an email link, the system automatically prefills the associated email address to streamline authentication and reduce manual input."
          },
          {
            q: "What does the user need to do after the email is prefilled?",
            a: "Once the email is recognized and prefilled, the user is prompted to enter their password to sign in."
          },
          {
            q: "Can users change the prefilled email address?",
            a: "No. The email address is prefilled and locked to ensure users access the information, service, or invitation associated with the original email link."
          },
          {
            q: "Why is the email prefilled automatically?",
            a: "The email is prefilled when users access the experience through an email link to streamline sign-in and ensure they are accessing the correct information, service, or invitation associated with that email address."
          }
        ]
      }
    ]
  },
  {
    category: "Cart & Pricing Experience",
    items: [
      {
        question: "Why can users see the cart before logging in?",
        subItems: [
          {
            q: "Can users view their cart without being logged in?",
            a: "Yes. The cart remains visible to users even before they sign in or create an account."
          },
          {
            q: "What pricing information is shown to logged-out users?",
            a: "The displayed price reflects the last seen price provided by Store (regular price)."
          },
          {
            q: "Why are users encouraged to sign in or create an account?",
            a: "Signing in allows users to view their applicable pricing, including any eligibility-based pricing rules, discounts, or membership conditions."
          }
        ]
      },
      {
        question: "How are related resources presented in the cart?",
        subItems: [
          {
            q: "How are related resources displayed in the cart experience?",
            a: "Related resources are presented through a lightweight cross-selling pattern within the cart experience to support discovery without interrupting the purchase flow."
          },
          {
            q: "Are the related resources recommendations shown for the entire cart or per item?",
            a: "Recommendations can be displayed either at the overall cart level or directly beneath individual cart items, depending on the relevance of the related resources."
          }
        ]
      }
    ]
  },
  {
    category: "Checkout & Payment Selection",
    items: [
      {
        question: "Why is only one related resource shown during checkout?",
        subItems: [
          {
            q: "Why does the checkout experience display only one related resource in the context panel?",
            a: "During checkout, only a single related resource is shown to minimize distractions and keep users focused on completing the payment flow."
          },
          {
            q: "Will users have access to additional related resources?",
            a: "Yes. After completing the purchase, users can explore more related resources on the confirmation page."
          },
          {
            q: "Does limiting related resources during checkout affect discoverability?",
            a: "No. The experience is designed to reduce distractions during checkout while still providing opportunities to surface related resources in more appropriate moments of the journey, such as the confirmation experience."
          }
        ]
      },
      {
        question: "How does dynamic pricing work during payment selection?",
        subItems: [
          {
            q: "How does the price change when a user selects billing information and payment method?",
            a: "Once billing information and payment method is selected, the pricing summary in the context panel dynamically updates to reflect the latest applicable pricing details."
          },
          {
            q: "Are discounts automatically applied during payment selection?",
            a: "Yes. Any applicable discounts associated with the selected payment method or user eligibility are automatically reflected in the updated pricing summary."
          },
          {
            q: "Can the total price still change after selecting a payment method?",
            a: "Yes. The total may still change if the user applies a promo code."
          },
          {
            q: "Why does the pricing summary update dynamically?",
            a: "Dynamic pricing updates ensure users always see the most accurate and current pricing information before completing their purchase."
          },
          {
            q: "Does the contextual messaging also change during payment selection?",
            a: "Yes. Supporting text within the context panel at the bottom updates alongside the pricing summary to reflect the currently applied pricing conditions and payment context."
          }
        ]
      },
      {
        question: "Why does the payment CTA button change based on the payment method?",
        subItems: [
          {
            q: "Why does the CTA button label change during payment selection?",
            a: "The CTA button dynamically updates based on the selected payment method to clearly communicate the next step in the payment flow."
          },
          {
            q: "What CTA is shown for bank transfer or ICH payment methods?",
            a: "For bank transfer or ICH payment methods, the CTA button displays “Complete Order.”"
          },
          {
            q: "What CTA is shown for credit card payments?",
            a: "For credit card payments, the CTA button changes to “Continue to secure payment.”"
          },
          {
            q: "Why is the credit card CTA different?",
            a: "Credit card payments require users enter and confirm their payment details before the transaction can be completed."
          },
          {
            q: "How does this improve the payment experience?",
            a: "The dynamic CTA helps set clear expectations by guiding users through the correct payment journey based on their selected payment method."
          }
        ]
      }
    ]
  },
  {
    category: "Account Creation & Data Collection",
    items: [
      {
        question: "What happens after a user signs in or creates an account during the purchase flow?",
        subItems: [
          {
            q: "Where do users sign in or create their account?",
            a: "Users authenticate through the IATA Customer Portal, where they can create their account."
          },
          {
            q: "What happens after authentication is completed during purchase flow?",
            a: "Once the user successfully signs in or creates an account, they are automatically redirected to Store to continue their purchase journey."
          },
          {
            q: "Will users lose their progress during authentication?",
            a: "No. Users are returned to the Store purchase flow so they can continue from where they left off."
          }
        ]
      },
      {
        question: "Why is less personal information required for non-training purchases?",
        subItems: [
          {
            q: "Why are new users (who are creating an account during purchase flow) only asked for minimal personal information for non-training purchases?",
            a: "For non-training purchases, users are only required to provide the minimum necessary personal information when creating their account, since no LMS synchronization or certification data is needed."
          },
          {
            q: "How is this different from training purchases?",
            a: "Training-related purchases may require additional learner and certification information, while non-training purchases follow a simplified flow."
          }
        ]
      },
      {
        question: "Why is certification information collected during account creation for training purchases?",
        subItems: [
          {
            q: "When are users asked to provide certification information needed for their training within the purchase flow?",
            a: "Certification information is collected during account creation in the step “Personal information” when a user without an existing account is purchasing a training course."
          },
          {
            q: "Why is certification information requested during the purchase flow?",
            a: "Since the user is already providing personal details during account creation, the additional certification fields are collected at the same time to streamline the overall experience and avoid requesting more information later."
          },
          {
            q: "Does every new account require certification information?",
            a: "No. This additional information is only requested when the system detects that the user is new and purchasing a training that requires LMS synchronization or certification-related data."
          }
        ]
      }
    ]
  },
  {
    category: "Adaptive Steps & Product Types",
    items: [
      {
        question: "Why are additional checkout steps required for physical items?",
        subItems: [
          {
            q: "Why are shipping details collected during the checkout flow?",
            a: "Shipping details are required when the purchase includes a physical item that needs to be delivered. Billing information label then changes to “Billing & shipping information”."
          },
          {
            q: "Does this apply to all purchases?",
            a: "No. Shipping-related steps are only included when the order contains physical products."
          }
        ]
      },
      {
        question: "Why does the number of checkout steps change?",
        subItems: [
          {
            q: "Why does the checkout flow sometimes contain fewer steps?",
            a: "The number of steps dynamically changes based on the selected account type, whether a user is existing or not and purchase context."
          },
          {
            q: "What happens when a user selects a personal account?",
            a: "When a user selects a personal account, the flow is reduced with one step by removing the “Your organization” step."
          }
        ]
      }
    ]
  },
  {
    category: "Terminology & Platform Alignment",
    items: [
      {
        question: "Why is “Add to Shopping Basket” changed to “Add to Cart” in the LMS?",
        subItems: [
          {
            q: "Why is the “Add to Shopping Basket” label changed to “Add to Cart” in the LMS?",
            a: "The label was updated to “Add to Cart” to align with the terminology used across the Store experience."
          },
          {
            q: "Why is terminology consistency important?",
            a: "Using consistent terminology across LMS and Store creates a more seamless and predictable experience for users as they move between platforms."
          },
          {
            q: "Does this change affect the purchasing flow?",
            a: "No. The update is purely a terminology and experience consistency improvement."
          },
          {
            q: "Will users still be able to purchase trainings through the LMS?",
            a: "Yes. Users can continue adding training courses and proceeding with the purchase flow, now with terminology aligned to Store."
          },
          {
            q: "Will the cart experience also be aligned between Store and LMS?",
            a: "Yes. In addition to updating the terminology from “Shopping Basket” to “Cart,” the cart experience in LMS is being aligned with Store to create a more consistent user experience across both platforms."
          }
        ]
      }
    ]
  },
  {
    category: "Post-Purchase & Confirmation",
    items: [
      {
        question: "What happens after a training purchase is completed?",
        subItems: [
          {
            q: "Is the training service activated automatically after purchase?",
            a: "Yes. The training service is automatically activated once the purchase is successfully completed."
          },
          {
            q: "When does the purchased course become available in the LMS?",
            a: "Purchased courses become available in the Learning Management System (LMS) immediately after the purchase is completed. This is a pattern applicable across services that can be purchased or activated."
          },
          {
            q: "Do users need to manually activate their course access?",
            a: "No. Course activation and LMS availability happen automatically after the course purchase."
          },
          {
            q: "Why is immediate LMS availability important?",
            a: "Immediate access allows users to begin their learning journey without delays after completing the transaction."
          },
          {
            q: "Will users receive confirmation that their course is available?",
            a: "Yes. Users are informed on the confirmation screen and by email once the purchase is completed and the training service is automatically activated and the training is available in the LMS."
          }
        ]
      }
    ]
  }
];
