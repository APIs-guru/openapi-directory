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
var SchemeOauth2Implicit = /** @class */ (function (_super) {
    __extends(SchemeOauth2Implicit, _super);
    function SchemeOauth2Implicit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=Authorization" }),
        __metadata("design:type", String)
    ], SchemeOauth2Implicit.prototype, "authorization", void 0);
    return SchemeOauth2Implicit;
}(SpeakeasyBase));
export { SchemeOauth2Implicit };
var SchemeOauth2Code = /** @class */ (function (_super) {
    __extends(SchemeOauth2Code, _super);
    function SchemeOauth2Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=Authorization" }),
        __metadata("design:type", String)
    ], SchemeOauth2Code.prototype, "authorization", void 0);
    return SchemeOauth2Code;
}(SpeakeasyBase));
export { SchemeOauth2Code };
var Security = /** @class */ (function (_super) {
    __extends(Security, _super);
    function Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", SchemeOauth2Implicit)
    ], Security.prototype, "oauth2Implicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", SchemeOauth2Code)
    ], Security.prototype, "oauth2Code", void 0);
    return Security;
}(SpeakeasyBase));
export { Security };
var SchemeApiKey = /** @class */ (function (_super) {
    __extends(SchemeApiKey, _super);
    function SchemeApiKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, name=api_key" }),
        __metadata("design:type", String)
    ], SchemeApiKey.prototype, "apiKey", void 0);
    return SchemeApiKey;
}(SpeakeasyBase));
export { SchemeApiKey };
