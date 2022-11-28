var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountFilter } from "./accountfilter";
import { AccountSelectionCardinalityEnum } from "./accountselectioncardinalityenum";
// RequestedScopes
/**
 * Scope of required and optional account features or content from a ConnectedApplication.
**/
var RequestedScopes = /** @class */ (function (_super) {
    __extends(RequestedScopes, _super);
    function RequestedScopes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_filters" }),
        __metadata("design:type", AccountFilter)
    ], RequestedScopes.prototype, "accountFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_selection_cardinality" }),
        __metadata("design:type", String)
    ], RequestedScopes.prototype, "accountSelectionCardinality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optional_product_access" }),
        __metadata("design:type", Map)
    ], RequestedScopes.prototype, "optionalProductAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required_product_access" }),
        __metadata("design:type", Map)
    ], RequestedScopes.prototype, "requiredProductAccess", void 0);
    return RequestedScopes;
}(SpeakeasyBase));
export { RequestedScopes };
