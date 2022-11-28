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
import * as shared from "../shared";
var DeleteUcsManagerPathParams = /** @class */ (function (_super) {
    __extends(DeleteUcsManagerPathParams, _super);
    function DeleteUcsManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteUcsManagerPathParams.prototype, "id", void 0);
    return DeleteUcsManagerPathParams;
}(SpeakeasyBase));
export { DeleteUcsManagerPathParams };
var DeleteUcsManagerSecurity = /** @class */ (function (_super) {
    __extends(DeleteUcsManagerSecurity, _super);
    function DeleteUcsManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], DeleteUcsManagerSecurity.prototype, "apiKeyAuth", void 0);
    return DeleteUcsManagerSecurity;
}(SpeakeasyBase));
export { DeleteUcsManagerSecurity };
var DeleteUcsManagerRequest = /** @class */ (function (_super) {
    __extends(DeleteUcsManagerRequest, _super);
    function DeleteUcsManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUcsManagerPathParams)
    ], DeleteUcsManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUcsManagerSecurity)
    ], DeleteUcsManagerRequest.prototype, "security", void 0);
    return DeleteUcsManagerRequest;
}(SpeakeasyBase));
export { DeleteUcsManagerRequest };
var DeleteUcsManagerResponse = /** @class */ (function (_super) {
    __extends(DeleteUcsManagerResponse, _super);
    function DeleteUcsManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteUcsManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteUcsManagerResponse.prototype, "statusCode", void 0);
    return DeleteUcsManagerResponse;
}(SpeakeasyBase));
export { DeleteUcsManagerResponse };
