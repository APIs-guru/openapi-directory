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
var UsersUpdatePathParams = /** @class */ (function (_super) {
    __extends(UsersUpdatePathParams, _super);
    function UsersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], UsersUpdatePathParams.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upnOrObjectId" }),
        __metadata("design:type", String)
    ], UsersUpdatePathParams.prototype, "upnOrObjectId", void 0);
    return UsersUpdatePathParams;
}(SpeakeasyBase));
export { UsersUpdatePathParams };
var UsersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(UsersUpdateQueryParams, _super);
    function UsersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], UsersUpdateQueryParams.prototype, "apiVersion", void 0);
    return UsersUpdateQueryParams;
}(SpeakeasyBase));
export { UsersUpdateQueryParams };
var UsersUpdateRequests = /** @class */ (function (_super) {
    __extends(UsersUpdateRequests, _super);
    function UsersUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], UsersUpdateRequests.prototype, "userUpdateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], UsersUpdateRequests.prototype, "userUpdateParameters1", void 0);
    return UsersUpdateRequests;
}(SpeakeasyBase));
export { UsersUpdateRequests };
var UsersUpdateRequest = /** @class */ (function (_super) {
    __extends(UsersUpdateRequest, _super);
    function UsersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdatePathParams)
    ], UsersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdateQueryParams)
    ], UsersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersUpdateRequests)
    ], UsersUpdateRequest.prototype, "request", void 0);
    return UsersUpdateRequest;
}(SpeakeasyBase));
export { UsersUpdateRequest };
var UsersUpdateResponse = /** @class */ (function (_super) {
    __extends(UsersUpdateResponse, _super);
    function UsersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], UsersUpdateResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersUpdateResponse.prototype, "statusCode", void 0);
    return UsersUpdateResponse;
}(SpeakeasyBase));
export { UsersUpdateResponse };
