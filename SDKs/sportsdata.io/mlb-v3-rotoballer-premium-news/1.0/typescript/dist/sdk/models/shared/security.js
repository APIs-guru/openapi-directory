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
var SchemeApiKeyHeader = /** @class */ (function (_super) {
    __extends(SchemeApiKeyHeader, _super);
    function SchemeApiKeyHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, name=Ocp-Apim-Subscription-Key" }),
        __metadata("design:type", String)
    ], SchemeApiKeyHeader.prototype, "apiKey", void 0);
    return SchemeApiKeyHeader;
}(SpeakeasyBase));
export { SchemeApiKeyHeader };
var SchemeApiKeyQuery = /** @class */ (function (_super) {
    __extends(SchemeApiKeyQuery, _super);
    function SchemeApiKeyQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, name=subscription-key" }),
        __metadata("design:type", String)
    ], SchemeApiKeyQuery.prototype, "apiKey", void 0);
    return SchemeApiKeyQuery;
}(SpeakeasyBase));
export { SchemeApiKeyQuery };
var SecurityOption1 = /** @class */ (function (_super) {
    __extends(SecurityOption1, _super);
    function SecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", SchemeApiKeyHeader)
    ], SecurityOption1.prototype, "apiKeyHeader", void 0);
    return SecurityOption1;
}(SpeakeasyBase));
export { SecurityOption1 };
var SecurityOption2 = /** @class */ (function (_super) {
    __extends(SecurityOption2, _super);
    function SecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", SchemeApiKeyQuery)
    ], SecurityOption2.prototype, "apiKeyQuery", void 0);
    return SecurityOption2;
}(SpeakeasyBase));
export { SecurityOption2 };
var Security = /** @class */ (function (_super) {
    __extends(Security, _super);
    function Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SecurityOption1)
    ], Security.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SecurityOption2)
    ], Security.prototype, "option2", void 0);
    return Security;
}(SpeakeasyBase));
export { Security };
