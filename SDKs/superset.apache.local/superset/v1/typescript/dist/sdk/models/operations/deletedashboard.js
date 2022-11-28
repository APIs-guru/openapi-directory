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
var DeleteDashboardQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDashboardQueryParams, _super);
    function DeleteDashboardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteDashboardQueryParams.prototype, "q", void 0);
    return DeleteDashboardQueryParams;
}(SpeakeasyBase));
export { DeleteDashboardQueryParams };
var DeleteDashboardSecurity = /** @class */ (function (_super) {
    __extends(DeleteDashboardSecurity, _super);
    function DeleteDashboardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDashboardSecurity.prototype, "jwt", void 0);
    return DeleteDashboardSecurity;
}(SpeakeasyBase));
export { DeleteDashboardSecurity };
var DeleteDashboard200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboard200ApplicationJson, _super);
    function DeleteDashboard200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboard200ApplicationJson.prototype, "message", void 0);
    return DeleteDashboard200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboard200ApplicationJson };
var DeleteDashboard401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboard401ApplicationJson, _super);
    function DeleteDashboard401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboard401ApplicationJson.prototype, "message", void 0);
    return DeleteDashboard401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboard401ApplicationJson };
var DeleteDashboard403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboard403ApplicationJson, _super);
    function DeleteDashboard403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboard403ApplicationJson.prototype, "message", void 0);
    return DeleteDashboard403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboard403ApplicationJson };
var DeleteDashboard404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboard404ApplicationJson, _super);
    function DeleteDashboard404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboard404ApplicationJson.prototype, "message", void 0);
    return DeleteDashboard404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboard404ApplicationJson };
var DeleteDashboard422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboard422ApplicationJson, _super);
    function DeleteDashboard422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboard422ApplicationJson.prototype, "message", void 0);
    return DeleteDashboard422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboard422ApplicationJson };
var DeleteDashboard500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDashboard500ApplicationJson, _super);
    function DeleteDashboard500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDashboard500ApplicationJson.prototype, "message", void 0);
    return DeleteDashboard500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDashboard500ApplicationJson };
var DeleteDashboardRequest = /** @class */ (function (_super) {
    __extends(DeleteDashboardRequest, _super);
    function DeleteDashboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardQueryParams)
    ], DeleteDashboardRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboardSecurity)
    ], DeleteDashboardRequest.prototype, "security", void 0);
    return DeleteDashboardRequest;
}(SpeakeasyBase));
export { DeleteDashboardRequest };
var DeleteDashboardResponse = /** @class */ (function (_super) {
    __extends(DeleteDashboardResponse, _super);
    function DeleteDashboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDashboardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboard200ApplicationJson)
    ], DeleteDashboardResponse.prototype, "deleteDashboard200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboard401ApplicationJson)
    ], DeleteDashboardResponse.prototype, "deleteDashboard401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboard403ApplicationJson)
    ], DeleteDashboardResponse.prototype, "deleteDashboard403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboard404ApplicationJson)
    ], DeleteDashboardResponse.prototype, "deleteDashboard404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboard422ApplicationJson)
    ], DeleteDashboardResponse.prototype, "deleteDashboard422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDashboard500ApplicationJson)
    ], DeleteDashboardResponse.prototype, "deleteDashboard500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDashboardResponse.prototype, "statusCode", void 0);
    return DeleteDashboardResponse;
}(SpeakeasyBase));
export { DeleteDashboardResponse };
