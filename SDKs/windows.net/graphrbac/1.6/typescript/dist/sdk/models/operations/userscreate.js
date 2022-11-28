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
var UsersCreatePathParams = /** @class */ (function (_super) {
    __extends(UsersCreatePathParams, _super);
    function UsersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], UsersCreatePathParams.prototype, "tenantId", void 0);
    return UsersCreatePathParams;
}(SpeakeasyBase));
export { UsersCreatePathParams };
var UsersCreateQueryParams = /** @class */ (function (_super) {
    __extends(UsersCreateQueryParams, _super);
    function UsersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], UsersCreateQueryParams.prototype, "apiVersion", void 0);
    return UsersCreateQueryParams;
}(SpeakeasyBase));
export { UsersCreateQueryParams };
var UsersCreateRequests = /** @class */ (function (_super) {
    __extends(UsersCreateRequests, _super);
    function UsersCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], UsersCreateRequests.prototype, "userCreateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], UsersCreateRequests.prototype, "userCreateParameters1", void 0);
    return UsersCreateRequests;
}(SpeakeasyBase));
export { UsersCreateRequests };
var UsersCreateRequest = /** @class */ (function (_super) {
    __extends(UsersCreateRequest, _super);
    function UsersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersCreatePathParams)
    ], UsersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersCreateQueryParams)
    ], UsersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersCreateRequests)
    ], UsersCreateRequest.prototype, "request", void 0);
    return UsersCreateRequest;
}(SpeakeasyBase));
export { UsersCreateRequest };
var UsersCreateResponse = /** @class */ (function (_super) {
    __extends(UsersCreateResponse, _super);
    function UsersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], UsersCreateResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UsersCreateResponse.prototype, "user", void 0);
    return UsersCreateResponse;
}(SpeakeasyBase));
export { UsersCreateResponse };
