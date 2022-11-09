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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var ApiKey = /** @class */ (function (_super) {
    __extends(ApiKey, _super);
    function ApiKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "comment", void 0);
    __decorate([
        Metadata({ data: "json, name=counter" }),
        __metadata("design:type", Number)
    ], ApiKey.prototype, "counter", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], ApiKey.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=inactive" }),
        __metadata("design:type", Boolean)
    ], ApiKey.prototype, "inactive", void 0);
    __decorate([
        Metadata({ data: "json, name=last_used_at" }),
        __metadata("design:type", Number)
    ], ApiKey.prototype, "lastUsedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=last_used_ip" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "lastUsedIp", void 0);
    __decorate([
        Metadata({ data: "json, name=last_used_ua" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "lastUsedUa", void 0);
    __decorate([
        Metadata({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "organizationId", void 0);
    __decorate([
        Metadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ApiKey.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_limit" }),
        __metadata("design:type", Number)
    ], ApiKey.prototype, "usageLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=usage_today" }),
        __metadata("design:type", Number)
    ], ApiKey.prototype, "usageToday", void 0);
    return ApiKey;
}(SpeakeasyBase));
export { ApiKey };
