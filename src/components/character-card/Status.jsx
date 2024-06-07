export default function Status({ status }) {
   const statusColor = (status) => {
      switch (status) {
         case "Alive":
            return "green";
         case "Dead":
            return "red";
         case "unknown":
            return "gray";
      }
   };
   return (
      <>
         <span className="status" style={{ backgroundColor: statusColor(status) }}>
            {status}
         </span>
      </>
   );
}
