import type { Property } from "@/data/properties";
import Placeholder from "./Placeholder";
import { IconPin, IconBed, IconBath, IconRuler } from "./icons";

const statusLabel: Record<Property["status"], string> = {
  "de-vanzare": "De vânzare",
  rezervat: "Rezervat",
  vandut: "Vândut",
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <div className="property-media">
        <div className="badges">
          {property.zeroCommission && <span className="badge green">0% comision</span>}
          {property.exclusive && <span className="badge gold">Reprezentare exclusivă</span>}
        </div>
        <span className={`badge status ${property.status}`}>{statusLabel[property.status]}</span>
        {property.image ? (
          <img src={property.image} alt={property.title} className="property-photo" />
        ) : (
          <Placeholder label={property.location} showIcon={false} />
        )}
      </div>
      <div className="property-body">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-loc">
          <IconPin style={{ width: 15, height: 15 }} />
          {property.location}
        </div>
        <div className="property-meta">
          <div className="property-specs">
            {property.rooms > 0 && (
              <span>
                <IconBed style={{ width: 16, height: 16 }} /> {property.rooms} cam.
              </span>
            )}
            {property.baths > 0 && (
              <span>
                <IconBath style={{ width: 16, height: 16 }} /> {property.baths} băi
              </span>
            )}
            <span>
              <IconRuler style={{ width: 16, height: 16 }} /> {property.surface} m²
            </span>
          </div>
          <div className="property-price">{property.price}</div>
        </div>
      </div>
    </article>
  );
}
