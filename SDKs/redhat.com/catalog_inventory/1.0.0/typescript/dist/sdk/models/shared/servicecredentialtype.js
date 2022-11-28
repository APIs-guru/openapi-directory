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
var ServiceCredentialType = /** @class */ (function (_super) {
    __extends(ServiceCredentialType, _super);
    function ServiceCredentialType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived_at" }),
        __metadata("design:type", Date)
    ], ServiceCredentialType.prototype, "archivedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ServiceCredentialType.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at" }),
        __metadata("design:type", Date)
    ], ServiceCredentialType.prototype, "lastSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_state_part_id" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "refreshStatePartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_created_at" }),
        __metadata("design:type", Date)
    ], ServiceCredentialType.prototype, "sourceCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_deleted_at" }),
        __metadata("design:type", Date)
    ], ServiceCredentialType.prototype, "sourceDeletedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_ref" }),
        __metadata("design:type", String)
    ], ServiceCredentialType.prototype, "sourceRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ServiceCredentialType.prototype, "updatedAt", void 0);
    return ServiceCredentialType;
}(SpeakeasyBase));
export { ServiceCredentialType };
