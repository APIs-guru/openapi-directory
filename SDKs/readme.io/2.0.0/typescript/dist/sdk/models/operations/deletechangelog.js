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
import * as shared from "../shared";
var DeleteChangelogPathParams = /** @class */ (function (_super) {
    __extends(DeleteChangelogPathParams, _super);
    function DeleteChangelogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], DeleteChangelogPathParams.prototype, "slug", void 0);
    return DeleteChangelogPathParams;
}(SpeakeasyBase));
export { DeleteChangelogPathParams };
var DeleteChangelogSecurity = /** @class */ (function (_super) {
    __extends(DeleteChangelogSecurity, _super);
    function DeleteChangelogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteChangelogSecurity.prototype, "apiKey", void 0);
    return DeleteChangelogSecurity;
}(SpeakeasyBase));
export { DeleteChangelogSecurity };
var DeleteChangelogRequest = /** @class */ (function (_super) {
    __extends(DeleteChangelogRequest, _super);
    function DeleteChangelogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteChangelogPathParams)
    ], DeleteChangelogRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteChangelogSecurity)
    ], DeleteChangelogRequest.prototype, "security", void 0);
    return DeleteChangelogRequest;
}(SpeakeasyBase));
export { DeleteChangelogRequest };
var DeleteChangelogResponse = /** @class */ (function (_super) {
    __extends(DeleteChangelogResponse, _super);
    function DeleteChangelogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteChangelogResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteChangelogResponse.prototype, "statusCode", void 0);
    return DeleteChangelogResponse;
}(SpeakeasyBase));
export { DeleteChangelogResponse };
