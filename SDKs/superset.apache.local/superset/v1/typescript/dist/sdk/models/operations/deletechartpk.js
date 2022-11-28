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
var DeleteChartPkPathParams = /** @class */ (function (_super) {
    __extends(DeleteChartPkPathParams, _super);
    function DeleteChartPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteChartPkPathParams.prototype, "pk", void 0);
    return DeleteChartPkPathParams;
}(SpeakeasyBase));
export { DeleteChartPkPathParams };
var DeleteChartPkSecurity = /** @class */ (function (_super) {
    __extends(DeleteChartPkSecurity, _super);
    function DeleteChartPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteChartPkSecurity.prototype, "jwt", void 0);
    return DeleteChartPkSecurity;
}(SpeakeasyBase));
export { DeleteChartPkSecurity };
var DeleteChartPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChartPk200ApplicationJson, _super);
    function DeleteChartPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChartPk200ApplicationJson.prototype, "message", void 0);
    return DeleteChartPk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteChartPk200ApplicationJson };
var DeleteChartPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChartPk401ApplicationJson, _super);
    function DeleteChartPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChartPk401ApplicationJson.prototype, "message", void 0);
    return DeleteChartPk401ApplicationJson;
}(SpeakeasyBase));
export { DeleteChartPk401ApplicationJson };
var DeleteChartPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChartPk403ApplicationJson, _super);
    function DeleteChartPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChartPk403ApplicationJson.prototype, "message", void 0);
    return DeleteChartPk403ApplicationJson;
}(SpeakeasyBase));
export { DeleteChartPk403ApplicationJson };
var DeleteChartPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChartPk404ApplicationJson, _super);
    function DeleteChartPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChartPk404ApplicationJson.prototype, "message", void 0);
    return DeleteChartPk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteChartPk404ApplicationJson };
var DeleteChartPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChartPk422ApplicationJson, _super);
    function DeleteChartPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChartPk422ApplicationJson.prototype, "message", void 0);
    return DeleteChartPk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteChartPk422ApplicationJson };
var DeleteChartPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteChartPk500ApplicationJson, _super);
    function DeleteChartPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteChartPk500ApplicationJson.prototype, "message", void 0);
    return DeleteChartPk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteChartPk500ApplicationJson };
var DeleteChartPkRequest = /** @class */ (function (_super) {
    __extends(DeleteChartPkRequest, _super);
    function DeleteChartPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPkPathParams)
    ], DeleteChartPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPkSecurity)
    ], DeleteChartPkRequest.prototype, "security", void 0);
    return DeleteChartPkRequest;
}(SpeakeasyBase));
export { DeleteChartPkRequest };
var DeleteChartPkResponse = /** @class */ (function (_super) {
    __extends(DeleteChartPkResponse, _super);
    function DeleteChartPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteChartPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPk200ApplicationJson)
    ], DeleteChartPkResponse.prototype, "deleteChartPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPk401ApplicationJson)
    ], DeleteChartPkResponse.prototype, "deleteChartPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPk403ApplicationJson)
    ], DeleteChartPkResponse.prototype, "deleteChartPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPk404ApplicationJson)
    ], DeleteChartPkResponse.prototype, "deleteChartPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPk422ApplicationJson)
    ], DeleteChartPkResponse.prototype, "deleteChartPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteChartPk500ApplicationJson)
    ], DeleteChartPkResponse.prototype, "deleteChartPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteChartPkResponse.prototype, "statusCode", void 0);
    return DeleteChartPkResponse;
}(SpeakeasyBase));
export { DeleteChartPkResponse };
