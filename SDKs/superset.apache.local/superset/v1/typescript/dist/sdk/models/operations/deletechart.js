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
var DeleteChartQueryParams = /** @class */ (function (_super) {
    __extends(DeleteChartQueryParams, _super);
    function DeleteChartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteChartQueryParams.prototype, "q", void 0);
    return DeleteChartQueryParams;
}(SpeakeasyBase));
export { DeleteChartQueryParams };
var DeleteChartSecurity = /** @class */ (function (_super) {
    __extends(DeleteChartSecurity, _super);
    function DeleteChartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteChartSecurity.prototype, "jwt", void 0);
    return DeleteChartSecurity;
}(SpeakeasyBase));
export { DeleteChartSecurity };
var DeleteChart200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChart200ApplicationJson, _super);
    function DeleteChart200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChart200ApplicationJson.prototype, "message", void 0);
    return DeleteChart200ApplicationJson;
}(SpeakeasyBase));
export { DeleteChart200ApplicationJson };
var DeleteChart401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChart401ApplicationJson, _super);
    function DeleteChart401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChart401ApplicationJson.prototype, "message", void 0);
    return DeleteChart401ApplicationJson;
}(SpeakeasyBase));
export { DeleteChart401ApplicationJson };
var DeleteChart403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChart403ApplicationJson, _super);
    function DeleteChart403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChart403ApplicationJson.prototype, "message", void 0);
    return DeleteChart403ApplicationJson;
}(SpeakeasyBase));
export { DeleteChart403ApplicationJson };
var DeleteChart404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChart404ApplicationJson, _super);
    function DeleteChart404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChart404ApplicationJson.prototype, "message", void 0);
    return DeleteChart404ApplicationJson;
}(SpeakeasyBase));
export { DeleteChart404ApplicationJson };
var DeleteChart422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChart422ApplicationJson, _super);
    function DeleteChart422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChart422ApplicationJson.prototype, "message", void 0);
    return DeleteChart422ApplicationJson;
}(SpeakeasyBase));
export { DeleteChart422ApplicationJson };
var DeleteChart500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChart500ApplicationJson, _super);
    function DeleteChart500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChart500ApplicationJson.prototype, "message", void 0);
    return DeleteChart500ApplicationJson;
}(SpeakeasyBase));
export { DeleteChart500ApplicationJson };
var DeleteChartRequest = /** @class */ (function (_super) {
    __extends(DeleteChartRequest, _super);
    function DeleteChartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartQueryParams)
    ], DeleteChartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartSecurity)
    ], DeleteChartRequest.prototype, "security", void 0);
    return DeleteChartRequest;
}(SpeakeasyBase));
export { DeleteChartRequest };
var DeleteChartResponse = /** @class */ (function (_super) {
    __extends(DeleteChartResponse, _super);
    function DeleteChartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteChartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChart200ApplicationJson)
    ], DeleteChartResponse.prototype, "deleteChart200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChart401ApplicationJson)
    ], DeleteChartResponse.prototype, "deleteChart401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChart403ApplicationJson)
    ], DeleteChartResponse.prototype, "deleteChart403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChart404ApplicationJson)
    ], DeleteChartResponse.prototype, "deleteChart404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChart422ApplicationJson)
    ], DeleteChartResponse.prototype, "deleteChart422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChart500ApplicationJson)
    ], DeleteChartResponse.prototype, "deleteChart500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteChartResponse.prototype, "statusCode", void 0);
    return DeleteChartResponse;
}(SpeakeasyBase));
export { DeleteChartResponse };
