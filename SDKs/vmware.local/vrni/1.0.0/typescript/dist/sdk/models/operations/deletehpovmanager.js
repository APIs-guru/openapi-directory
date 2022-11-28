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
var DeleteHpovManagerPathParams = /** @class */ (function (_super) {
    __extends(DeleteHpovManagerPathParams, _super);
    function DeleteHpovManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteHpovManagerPathParams.prototype, "id", void 0);
    return DeleteHpovManagerPathParams;
}(SpeakeasyBase));
export { DeleteHpovManagerPathParams };
var DeleteHpovManagerSecurity = /** @class */ (function (_super) {
    __extends(DeleteHpovManagerSecurity, _super);
    function DeleteHpovManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], DeleteHpovManagerSecurity.prototype, "apiKeyAuth", void 0);
    return DeleteHpovManagerSecurity;
}(SpeakeasyBase));
export { DeleteHpovManagerSecurity };
var DeleteHpovManagerRequest = /** @class */ (function (_super) {
    __extends(DeleteHpovManagerRequest, _super);
    function DeleteHpovManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteHpovManagerPathParams)
    ], DeleteHpovManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteHpovManagerSecurity)
    ], DeleteHpovManagerRequest.prototype, "security", void 0);
    return DeleteHpovManagerRequest;
}(SpeakeasyBase));
export { DeleteHpovManagerRequest };
var DeleteHpovManagerResponse = /** @class */ (function (_super) {
    __extends(DeleteHpovManagerResponse, _super);
    function DeleteHpovManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteHpovManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteHpovManagerResponse.prototype, "statusCode", void 0);
    return DeleteHpovManagerResponse;
}(SpeakeasyBase));
export { DeleteHpovManagerResponse };
