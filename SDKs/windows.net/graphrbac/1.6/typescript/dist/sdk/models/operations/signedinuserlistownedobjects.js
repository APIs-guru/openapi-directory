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
var SignedInUserListOwnedObjectsPathParams = /** @class */ (function (_super) {
    __extends(SignedInUserListOwnedObjectsPathParams, _super);
    function SignedInUserListOwnedObjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], SignedInUserListOwnedObjectsPathParams.prototype, "tenantId", void 0);
    return SignedInUserListOwnedObjectsPathParams;
}(SpeakeasyBase));
export { SignedInUserListOwnedObjectsPathParams };
var SignedInUserListOwnedObjectsQueryParams = /** @class */ (function (_super) {
    __extends(SignedInUserListOwnedObjectsQueryParams, _super);
    function SignedInUserListOwnedObjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], SignedInUserListOwnedObjectsQueryParams.prototype, "apiVersion", void 0);
    return SignedInUserListOwnedObjectsQueryParams;
}(SpeakeasyBase));
export { SignedInUserListOwnedObjectsQueryParams };
var SignedInUserListOwnedObjectsRequest = /** @class */ (function (_super) {
    __extends(SignedInUserListOwnedObjectsRequest, _super);
    function SignedInUserListOwnedObjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignedInUserListOwnedObjectsPathParams)
    ], SignedInUserListOwnedObjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignedInUserListOwnedObjectsQueryParams)
    ], SignedInUserListOwnedObjectsRequest.prototype, "queryParams", void 0);
    return SignedInUserListOwnedObjectsRequest;
}(SpeakeasyBase));
export { SignedInUserListOwnedObjectsRequest };
var SignedInUserListOwnedObjectsResponse = /** @class */ (function (_super) {
    __extends(SignedInUserListOwnedObjectsResponse, _super);
    function SignedInUserListOwnedObjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignedInUserListOwnedObjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryObjectListResult)
    ], SignedInUserListOwnedObjectsResponse.prototype, "directoryObjectListResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], SignedInUserListOwnedObjectsResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignedInUserListOwnedObjectsResponse.prototype, "statusCode", void 0);
    return SignedInUserListOwnedObjectsResponse;
}(SpeakeasyBase));
export { SignedInUserListOwnedObjectsResponse };
