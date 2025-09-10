# requirements.md

## Contact Form Project Requirements

### Functional Requirements

1. **Form Fields**

   - First Name (required)
   - Last Name (required)
   - Email Address (required, must be valid format)
   - Query Type (required, radio: General Enquiry or Support Request)
   - Message (required)
   - Consent Checkbox (required: "I consent to being contacted by the team")

2. **Validation**

   - All required fields must be validated on submit.
   - Email must match a standard email format.
   - Query Type must be selected.
   - Consent checkbox must be checked.
   - Error messages must display below each invalid field.
   - Error messages must disappear when the field is corrected.

3. **Error Styling**

   - Invalid fields should have a red border.
   - Error messages should be red and visible.
   - Valid fields should not show error styling.

4. **Success Message**

   - On successful submission, a fixed-position success message appears at the top center of the page.
   - The message should include a success icon and text: "Message Sent! Thanks for completing the form. We'll be in touch soon!"
   - The message should animate into view.

5. **Data Storage**

   - On successful submission, form data is saved to `localStorage` as a JSON string under the key `"value"`.

6. **Accessibility**
   - Error messages use `aria-live="polite"` for screen readers.
   - Success message uses `role="status"` and `aria-live="polite"`.

---

### UI/UX Requirements

1. **Responsive Design**

   - The form layout adapts for screens smaller than 576px (mobile).
   - On large screens (min-width: 1300px), the form width is 60%.

2. **Styling**

   - Uses the "Karla" font from Google Fonts.
   - Color palette is defined in CSS variables.
   - Custom radio and checkbox controls with visual feedback for checked/hover/focus states.
   - Button styling changes on hover.

3. **Visual Feedback**
   - Inputs, radio, and checkbox controls show border color changes on hover and focus.
   - Error and success states are visually distinct.

---

### Technical Requirements

1. **Files**

   - `index.html`: Main form markup.
   - `styles.css`: All styling rules.
   - `script.js`: Handles validation, error/success display, and localStorage.
   - Assets (icons, favicon) referenced in HTML.

2. **JavaScript**
   - No external libraries; all validation is custom.
   - Uses event listeners for form submission.
   - Error/success logic is modular and reusable.

---

### Non-Functional Requirements

- All user interactions should be smooth and without page reloads.
- No sensitive data is transmitted; all data is stored locally.
- Code should
