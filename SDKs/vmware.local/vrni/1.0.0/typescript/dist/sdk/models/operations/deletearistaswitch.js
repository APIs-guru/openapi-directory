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
var DeleteAristaSwitchPathParams = /** @class */ (function (_super) {
    __extends(DeleteAristaSwitchPathParams, _super);
    function DeleteAristaSwitchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteAristaSwitchPathParams.prototype, "id", void 0);
    return DeleteAristaSwitchPathParams;
}(SpeakeasyBase));
export { DeleteAristaSwitchPathParams };
var DeleteAristaSwitchSecurity = /** @class */ (function (_super) {
    __extends(DeleteAristaSwitchSecurity, _super);
    function DeleteAristaSwitchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], DeleteAristaSwitchSecurity.prototype, "apiKeyAuth", void 0);
    return DeleteAristaSwitchSecurity;
}(SpeakeasyBase));
export { DeleteAristaSwitchSecurity };
var DeleteAristaSwitchRequest = /** @class */ (function (_super) {
    __extends(DeleteAristaSwitchRequest, _super);
    function DeleteAristaSwitchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAristaSwitchPathParams)
    ], DeleteAristaSwitchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAristaSwitchSecurity)
    ], DeleteAristaSwitchRequest.prototype, "security", void 0);
    return DeleteAristaSwitchRequest;
}(SpeakeasyBase));
export { DeleteAristaSwitchRequest };
var DeleteAristaSwitchResponse = /** @class */ (function (_super) {
    __extends(DeleteAristaSwitchResponse, _super);
    function DeleteAristaSwitchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAristaSwitchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAristaSwitchResponse.prototype, "statusCode", void 0);
    return DeleteAristaSwitchResponse;
}(SpeakeasyBase));
export { DeleteAristaSwitchResponse };
