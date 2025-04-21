import React from "react";
// import { Link } from "react-router-dom";

const Privacy = () => {

  return (
    <React.Fragment>

        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h2>Mentions légales</h2>
            <h3>Informations légales</h3>
            <text>www.markuskammerer.com est un portail privé de publicité immobilière réservé aux sociétés et personnes affiliées, Concessionnaires, Franchisés, Partenaires, et Représentants ayant droit à l’utilisation de la marque Markus Kammerer et Chambellan Immobilier International, en France et à travers le monde.</text>
            <text>Les annonceurs en France qui sont professionnels de l’immobilier sont détenteur d’une carte de transaction ou de gestion conformément à la loi
                Hoguet n° 70-9 du 2 janvier 1970
                <br></br>
                <a href={"mailto:info@markuskammerer.immo"}>info@markuskammerer.immo</a>
            </text>
            {/*<br></br>*/}
            <h3>Services</h3>
            <text>Les Services fournis sur le Site Internet et/ou l’Application de la Société consistent à faciliter les démarches de l’Utilisateur dans sa recherche d’achat et/ou de vente et/ou de location d’un bien immobilier en lui permettant notamment de bénéficier gratuitement la visualisation d’offres de vente et / location de biens immobiliers ainsi qu’un service de mise en relation avec des Annonceurs.</text>
            <h3>Disponibilité des services</h3>
            <text>La Société fait ses meilleurs efforts afin de rendre ses Services disponibles 24 heures sur 24 et 7 jours sur 7, indépendamment des opérations de maintenance desdits Services et/ou Serveurs et/ou du Site Internet A ce titre, la Société est tenue d’une obligation de moyens.</text>
            <text>La Société se réserve la possibilité de modifier, interrompre, à tout moment, temporairement ou de manière permanente tout ou partie des Services sans information préalable des Utilisateurs et sans droit à indemnités.
            </text>
            <text>La Société fait ses meilleurs efforts pour assurer la continuité des Services ; cependant, compte tenu de la complexité et des circonstances spécifiques à l’activité particulière d’hébergeur, la Société ne peut être tenue qu’à une obligation de
                moyens.</text>
            <h3>
                Informatique et Libertés
            </h3>
            <text>Conformément à l’article 34 de la Loi « Informatique et Libertés » n° 78-17 du 6 janvier 1978, vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données qui vous concernent. Vous pouvez l’exercer en adressant un e-mail à l’adresse info@markuskammerer.immo ou par courrier à l’adresse ci-dessus.</text>
            <h3>
                Droits d’auteurs
            </h3>
            <text>
                L’ensemble du site Carlton International relève des législations française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents iconographiques et
                photographiques.
            </text>
            <text>Toute reproduction, même partielle, de ce site est formellement interdite sauf autorisation de la société CHAMBELLAN IMMOBILIER INTERNATIONAL en France.</text>
            <h3>Mentions légales</h3>
            <text>Le site markuskammerer.com est édité par <b>CHAMBELLAN IMMOBILIER
                INTERNATIONAL SASU</b> au capital de 5 000€, Identifiant No <b>833 134 109.</b></text>

            <h3>Hébergement</h3>
            <text>IONOS France</text>



        </article>

    </React.Fragment>
  );
};

export default Privacy;
