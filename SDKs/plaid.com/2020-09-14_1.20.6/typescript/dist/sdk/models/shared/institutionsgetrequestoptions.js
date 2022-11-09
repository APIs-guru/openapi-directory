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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// InstitutionsGetRequestOptions
/**
 * An optional object to filter `/institutions/get` results.
**/
var InstitutionsGetRequestOptions = /** @class */ (function (_super) {
    __extends(InstitutionsGetRequestOptions, _super);
    function InstitutionsGetRequestOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=include_optional_metadata" }),
        __metadata("design:type", Boolean)
    ], InstitutionsGetRequestOptions.prototype, "includeOptionalMetadata", void 0);
    __decorate([
        Metadata({ data: "json, name=include_payment_initiation_metadata" }),
        __metadata("design:type", Boolean)
    ], InstitutionsGetRequestOptions.prototype, "includePaymentInitiationMetadata", void 0);
    __decorate([
        Metadata({ data: "json, name=oauth" }),
        __metadata("design:type", Boolean)
    ], InstitutionsGetRequestOptions.prototype, "oauth", void 0);
    __decorate([
        Metadata({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], InstitutionsGetRequestOptions.prototype, "products", void 0);
    __decorate([
        Metadata({ data: "json, name=routing_numbers" }),
        __metadata("design:type", Array)
    ], InstitutionsGetRequestOptions.prototype, "routingNumbers", void 0);
    return InstitutionsGetRequestOptions;
}(SpeakeasyBase));
export { InstitutionsGetRequestOptions };
