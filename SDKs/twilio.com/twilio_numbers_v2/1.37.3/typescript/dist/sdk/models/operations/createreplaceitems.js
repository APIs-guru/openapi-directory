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
export var CreateReplaceItemsServerList = [
    "https://numbers.twilio.com",
];
var CreateReplaceItemsPathParams = /** @class */ (function (_super) {
    __extends(CreateReplaceItemsPathParams, _super);
    function CreateReplaceItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BundleSid" }),
        __metadata("design:type", String)
    ], CreateReplaceItemsPathParams.prototype, "bundleSid", void 0);
    return CreateReplaceItemsPathParams;
}(SpeakeasyBase));
export { CreateReplaceItemsPathParams };
var CreateReplaceItemsCreateReplaceItemsRequest = /** @class */ (function (_super) {
    __extends(CreateReplaceItemsCreateReplaceItemsRequest, _super);
    function CreateReplaceItemsCreateReplaceItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FromBundleSid;" }),
        __metadata("design:type", String)
    ], CreateReplaceItemsCreateReplaceItemsRequest.prototype, "fromBundleSid", void 0);
    return CreateReplaceItemsCreateReplaceItemsRequest;
}(SpeakeasyBase));
export { CreateReplaceItemsCreateReplaceItemsRequest };
var CreateReplaceItemsSecurity = /** @class */ (function (_super) {
    __extends(CreateReplaceItemsSecurity, _super);
    function CreateReplaceItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateReplaceItemsSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateReplaceItemsSecurity;
}(SpeakeasyBase));
export { CreateReplaceItemsSecurity };
var CreateReplaceItemsRequest = /** @class */ (function (_super) {
    __extends(CreateReplaceItemsRequest, _super);
    function CreateReplaceItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateReplaceItemsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateReplaceItemsPathParams)
    ], CreateReplaceItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateReplaceItemsCreateReplaceItemsRequest)
    ], CreateReplaceItemsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateReplaceItemsSecurity)
    ], CreateReplaceItemsRequest.prototype, "security", void 0);
    return CreateReplaceItemsRequest;
}(SpeakeasyBase));
export { CreateReplaceItemsRequest };
var CreateReplaceItemsResponse = /** @class */ (function (_super) {
    __extends(CreateReplaceItemsResponse, _super);
    function CreateReplaceItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateReplaceItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateReplaceItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NumbersV2RegulatoryComplianceBundleReplaceItems)
    ], CreateReplaceItemsResponse.prototype, "numbersV2RegulatoryComplianceBundleReplaceItems", void 0);
    return CreateReplaceItemsResponse;
}(SpeakeasyBase));
export { CreateReplaceItemsResponse };
