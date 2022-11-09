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
// AccountFilter
/**
 * Enumerates the account subtypes that the application wishes for the user to be able to select from. For more details refer to Plaid documentation on account filters.
**/
var AccountFilter = /** @class */ (function (_super) {
    __extends(AccountFilter, _super);
    function AccountFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credit" }),
        __metadata("design:type", Array)
    ], AccountFilter.prototype, "credit", void 0);
    __decorate([
        Metadata({ data: "json, name=depository" }),
        __metadata("design:type", Array)
    ], AccountFilter.prototype, "depository", void 0);
    __decorate([
        Metadata({ data: "json, name=investment" }),
        __metadata("design:type", Array)
    ], AccountFilter.prototype, "investment", void 0);
    __decorate([
        Metadata({ data: "json, name=loan" }),
        __metadata("design:type", Array)
    ], AccountFilter.prototype, "loan", void 0);
    return AccountFilter;
}(SpeakeasyBase));
export { AccountFilter };
