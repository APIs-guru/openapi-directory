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
var SignedInUserGetPathParams = /** @class */ (function (_super) {
    __extends(SignedInUserGetPathParams, _super);
    function SignedInUserGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], SignedInUserGetPathParams.prototype, "tenantId", void 0);
    return SignedInUserGetPathParams;
}(SpeakeasyBase));
export { SignedInUserGetPathParams };
var SignedInUserGetQueryParams = /** @class */ (function (_super) {
    __extends(SignedInUserGetQueryParams, _super);
    function SignedInUserGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], SignedInUserGetQueryParams.prototype, "apiVersion", void 0);
    return SignedInUserGetQueryParams;
}(SpeakeasyBase));
export { SignedInUserGetQueryParams };
var SignedInUserGetRequest = /** @class */ (function (_super) {
    __extends(SignedInUserGetRequest, _super);
    function SignedInUserGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignedInUserGetPathParams)
    ], SignedInUserGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignedInUserGetQueryParams)
    ], SignedInUserGetRequest.prototype, "queryParams", void 0);
    return SignedInUserGetRequest;
}(SpeakeasyBase));
export { SignedInUserGetRequest };
var SignedInUserGetResponse = /** @class */ (function (_super) {
    __extends(SignedInUserGetResponse, _super);
    function SignedInUserGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignedInUserGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], SignedInUserGetResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignedInUserGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SignedInUserGetResponse.prototype, "user", void 0);
    return SignedInUserGetResponse;
}(SpeakeasyBase));
export { SignedInUserGetResponse };
