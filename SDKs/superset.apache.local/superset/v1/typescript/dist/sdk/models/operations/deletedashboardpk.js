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
var DeleteDashboardPkPathParams = /** @class */ (function (_super) {
    __extends(DeleteDashboardPkPathParams, _super);
    function DeleteDashboardPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteDashboardPkPathParams.prototype, "pk", void 0);
    return DeleteDashboardPkPathParams;
}(SpeakeasyBase));
export { DeleteDashboardPkPathParams };
var DeleteDashboardPkSecurity = /** @class */ (function (_super) {
    __extends(DeleteDashboardPkSecurity, _super);
    function DeleteDashboardPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDashboardPkSecurity.prototype, "jwt", void 0);
    return DeleteDashboardPkSecurity;
}(SpeakeasyBase));
export { DeleteDashboardPkSecurity };
var DeleteDashboardPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboardPk200ApplicationJson, _super);
    function DeleteDashboardPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboardPk200ApplicationJson.prototype, "message", void 0);
    return DeleteDashboardPk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboardPk200ApplicationJson };
var DeleteDashboardPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboardPk401ApplicationJson, _super);
    function DeleteDashboardPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboardPk401ApplicationJson.prototype, "message", void 0);
    return DeleteDashboardPk401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboardPk401ApplicationJson };
var DeleteDashboardPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboardPk403ApplicationJson, _super);
    function DeleteDashboardPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboardPk403ApplicationJson.prototype, "message", void 0);
    return DeleteDashboardPk403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboardPk403ApplicationJson };
var DeleteDashboardPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboardPk404ApplicationJson, _super);
    function DeleteDashboardPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboardPk404ApplicationJson.prototype, "message", void 0);
    return DeleteDashboardPk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboardPk404ApplicationJson };
var DeleteDashboardPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboardPk422ApplicationJson, _super);
    function DeleteDashboardPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboardPk422ApplicationJson.prototype, "message", void 0);
    return DeleteDashboardPk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboardPk422ApplicationJson };
var DeleteDashboardPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboardPk500ApplicationJson, _super);
    function DeleteDashboardPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboardPk500ApplicationJson.prototype, "message", void 0);
    return DeleteDashboardPk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboardPk500ApplicationJson };
var DeleteDashboardPkRequest = /** @class */ (function (_super) {
    __extends(DeleteDashboardPkRequest, _super);
    function DeleteDashboardPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPkPathParams)
    ], DeleteDashboardPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPkSecurity)
    ], DeleteDashboardPkRequest.prototype, "security", void 0);
    return DeleteDashboardPkRequest;
}(SpeakeasyBase));
export { DeleteDashboardPkRequest };
var DeleteDashboardPkResponse = /** @class */ (function (_super) {
    __extends(DeleteDashboardPkResponse, _super);
    function DeleteDashboardPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDashboardPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPk200ApplicationJson)
    ], DeleteDashboardPkResponse.prototype, "deleteDashboardPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPk401ApplicationJson)
    ], DeleteDashboardPkResponse.prototype, "deleteDashboardPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPk403ApplicationJson)
    ], DeleteDashboardPkResponse.prototype, "deleteDashboardPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPk404ApplicationJson)
    ], DeleteDashboardPkResponse.prototype, "deleteDashboardPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPk422ApplicationJson)
    ], DeleteDashboardPkResponse.prototype, "deleteDashboardPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardPk500ApplicationJson)
    ], DeleteDashboardPkResponse.prototype, "deleteDashboardPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDashboardPkResponse.prototype, "statusCode", void 0);
    return DeleteDashboardPkResponse;
}(SpeakeasyBase));
export { DeleteDashboardPkResponse };
